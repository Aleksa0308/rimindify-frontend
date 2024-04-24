import * as React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { clientSchema } from '@/lib/validation/schemas/client-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { clientGroupSchema } from '@/lib/validation/schemas/client-group-schema'
import { useCreateClientGroup } from '@/lib/hooks/client-groups/use-create-client-group'
import { cn } from '@/lib/utils'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface CreateClientGroupForm extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean
    dialogOnChange: (open: boolean) => void
}

export function CreateClientGroupForm({
    className,
    open,
    dialogOnChange,
}: CreateClientGroupForm) {
    const form = useForm<z.infer<typeof clientGroupSchema>>({
        resolver: zodResolver(clientGroupSchema),
        defaultValues: {
            name: '',
            description: '',
        },
        mode: 'onBlur',
    })

    const mutation = useCreateClientGroup(dialogOnChange)

    async function onSubmit(values: z.infer<typeof clientGroupSchema>) {
        mutation.mutate(values)
        form.reset()
    }

    const handleDialogClick = () => {
        dialogOnChange(!open)
    }

    return (
        <div className={cn(className)}>
            <Dialog open={open} onOpenChange={() => dialogOnChange(!open)}>
                <DialogTrigger asChild>
                    <Button
                        variant="default"
                        onClick={handleDialogClick}
                        className="w-fit"
                    >
                        Create a Group +
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[560px]">
                    <DialogHeader>
                        <DialogTitle>New Client Group</DialogTitle>
                        <DialogDescription>
                            Create a empty Client Group that you can manage
                            later.
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="flex flex-col gap-2">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="name">
                                                Name
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="name"
                                                    placeholder="Group name"
                                                    type="text"
                                                    disabled={
                                                        mutation.isPending
                                                    }
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="description">
                                                Description
                                            </FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    rows={6}
                                                    id="description"
                                                    disabled={
                                                        mutation.isPending
                                                    }
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <p className="text-sm text-muted-foreground">
                                    The description of the client group for easy
                                    identification.
                                </p>
                                <DialogFooter>
                                    <Button
                                        type="submit"
                                        disabled={mutation.isPending}
                                    >
                                        Create
                                    </Button>
                                </DialogFooter>
                            </div>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </div>
    )
}
