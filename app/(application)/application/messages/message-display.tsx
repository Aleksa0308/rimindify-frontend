import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { loginSchema } from '@/lib/validation/schemas/login-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { messageSchema } from '@/lib/validation/schemas/message-schema'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { useEditMessageMutation } from '@/lib/hooks/mutations/use-edit-message-mutation'
import { toast } from 'sonner'
import { ActionConfirmationDialog } from '@/app/(application)/application/action-confirmation-dialog'
import { Trash2 } from 'lucide-react'
import { useDeleteMessageMutation } from '@/lib/hooks/mutations/use-delete-message'

interface MessageDisplayProps {
    message: MessageDto
}

export function MessageDisplay({ message }: MessageDisplayProps) {
    const [dialogOpen, setDialogOpen] = useState(false)
    const form = useForm<z.infer<typeof messageSchema>>({
        resolver: zodResolver(messageSchema),
        defaultValues: {
            title: message.title,
            content: message.content,
        },
        mode: 'onBlur',
    })

    useEffect(() => {
        form.reset({
            title: message.title,
            content: message.content,
        })
    }, [form, message])

    const mutation = useEditMessageMutation(message.messageId)
    const deleteMutation = useDeleteMessageMutation()
    const checkIfInputHasChanged = () => {
        return (
            message.title !== form.getValues('title').trim() ||
            message.content !== form.getValues('content').trim()
        )
    }
    const onSubmit = (values: z.infer<typeof messageSchema>) => {
        if (!checkIfInputHasChanged()) {
            toast.error('No changes detected')
            return
        }
        mutation.mutate(values)
    }
    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div
                        className={
                            'my-2 px-4 flex gap-1 items-center justify-between'
                        }
                    >
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel
                                        className="sr-only"
                                        htmlFor="title"
                                    >
                                        Title
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            id="title"
                                            placeholder="Message Title"
                                            type="text"
                                            disabled={mutation.isPending}
                                            {...field}
                                            className={cn(
                                                'border-none w-fit text-lg font-medium'
                                            )}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <ActionConfirmationDialog
                            buttonText="Delete"
                            open={dialogOpen}
                            dialogOnChange={setDialogOpen}
                            dialogTitle="Delete Message"
                            dialogDescription="Are you sure you want to delete this message?"
                            onAction={(confirmed) => {
                                if (confirmed) {
                                    // delete message
                                    deleteMutation.mutate(message.messageId)
                                }
                            }}
                            buttonVariant={'destructive'}
                            buttonIcon={<Trash2 className="h-4 w-4" />}
                            buttonStyle={'flex gap-2 self-end w-fit'}
                        />
                    </div>
                    <Separator className={'my-4'} />
                    <div className="container">
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
                                            disabled={mutation.isPending}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <p className="text-sm text-muted-foreground">
                            The content of the message that will be sent to the
                            client.
                        </p>
                        <div className="flex w-full justify-end mt-4">
                            <Button type="submit" disabled={mutation.isPending}>
                                Save Changes
                            </Button>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    )
}
