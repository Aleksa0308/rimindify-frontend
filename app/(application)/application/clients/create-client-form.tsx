import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import * as React from 'react'
import { cn } from '@/lib/utils'
import { z } from 'zod'
import { format } from 'date-fns'
import { useForm } from 'react-hook-form'
import { clientSchema } from '@/lib/validation/schemas/client-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import { PopoverClose } from '@radix-ui/react-popover'
import { useCreateClientMutation } from '@/lib/hooks/mutations/use-create-client-mutation'
import { useState } from 'react'

interface CreateClientForm extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean
    dialogOnChange: (open: boolean) => void
}
export function CreateClientForm({
    className,
    open,
    dialogOnChange,
}: CreateClientForm) {
    const form = useForm<z.infer<typeof clientSchema>>({
        resolver: zodResolver(clientSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            nickName: '',
            phone: '',
            appointment: new Date(),
        },
        mode: 'onBlur',
    })
    const mutation = useCreateClientMutation(dialogOnChange)

    async function onSubmit(values: z.infer<typeof clientSchema>) {
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
                        Add Client +
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[560px]">
                    <DialogHeader>
                        <DialogTitle>Add client</DialogTitle>
                        <DialogDescription>
                            Create a client that you can manage later.
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="grid grid-cols-2 gap-4 py-4">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="firstName">
                                                First name
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="firstName"
                                                    placeholder="First name"
                                                    type="text"
                                                    autoCapitalize="none"
                                                    autoCorrect="off"
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
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="lastName">
                                                Last name
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="lastName"
                                                    placeholder="Last name"
                                                    type="text"
                                                    autoCapitalize="none"
                                                    autoCorrect="off"
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
                                    name="nickName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="nickName">
                                                Nick name
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="nickName"
                                                    placeholder="Nick name"
                                                    type="text"
                                                    autoCapitalize="none"
                                                    autoCorrect="off"
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
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="phone">
                                                Phone
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="phone"
                                                    placeholder="Phone"
                                                    type="text"
                                                    autoCapitalize="none"
                                                    autoCorrect="off"
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
                                    name="appointment"
                                    render={({ field }) => (
                                        <div className="col-span-2">
                                            <FormItem className="flex flex-col">
                                                <FormLabel>
                                                    Appointment
                                                </FormLabel>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <FormControl>
                                                            <Button
                                                                variant={
                                                                    'outline'
                                                                }
                                                                className={cn(
                                                                    'pl-3 text-left font-normal',
                                                                    !field.value &&
                                                                        'text-muted-foreground'
                                                                )}
                                                            >
                                                                {field.value ? (
                                                                    format(
                                                                        field.value,
                                                                        'PPP'
                                                                    )
                                                                ) : (
                                                                    <span>
                                                                        Pick a
                                                                        date
                                                                    </span>
                                                                )}
                                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                            </Button>
                                                        </FormControl>
                                                    </PopoverTrigger>
                                                    <PopoverContent
                                                        className="w-auto p-0"
                                                        align="start"
                                                    >
                                                        <Calendar
                                                            mode="single"
                                                            selected={
                                                                field.value
                                                            }
                                                            onSelect={
                                                                field.onChange
                                                            }
                                                            disabled={(date) =>
                                                                date >
                                                                    new Date() ||
                                                                date <
                                                                    new Date(
                                                                        '1900-01-01'
                                                                    )
                                                            }
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                                <FormMessage />
                                            </FormItem>
                                        </div>
                                    )}
                                />
                            </div>
                            <DialogFooter>
                                <Button
                                    type="submit"
                                    disabled={mutation.isPending}
                                >
                                    Create
                                </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </div>
    )
}
