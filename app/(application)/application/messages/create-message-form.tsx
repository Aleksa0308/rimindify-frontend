import * as React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { messageSchema } from '@/lib/validation/schemas/message-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCreateMessageMutation } from '@/lib/hooks/messages/use-create-message'
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

interface CreateClientForm extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean
    dialogOnChange: (open: boolean) => void
}

export function CreateMessageForm({
    className,
    open,
    dialogOnChange,
}: CreateClientForm) {
    const form = useForm<z.infer<typeof messageSchema>>({
        resolver: zodResolver(messageSchema),
        defaultValues: {
            title: '',
            content: '',
        },
        mode: 'onBlur',
    })

    const mutation = useCreateMessageMutation(dialogOnChange)

    async function onSubmit(values: z.infer<typeof messageSchema>) {
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
                        New Message +
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[560px]">
                    <DialogHeader>
                        <DialogTitle>New Message</DialogTitle>
                        <DialogDescription>
                            Create a message that you can manage later.
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="flex flex-col gap-2">
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="title">
                                                Title
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="title"
                                                    placeholder="Message Title"
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
                                    name="content"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="content">
                                                Message Content
                                            </FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    rows={6}
                                                    id="content"
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
                                    The content of the message that will be sent
                                    to the client.
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
