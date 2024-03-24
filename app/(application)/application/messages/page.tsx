'use client'
import { MessageCard } from '@/app/(application)/application/messages/message-card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MessageDisplay } from '@/app/(application)/application/messages/message-display'
import { useMessages } from '@/lib/hooks/queries/use-messages'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { useMessage } from '@/lib/hooks/queries/use-message'

import { CreateMessageForm } from '@/app/(application)/application/messages/create-message-form'

export default function Messages() {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [selectedMessage, setSelectedMessage] = useState<number | null>(null)
    const messages = useMessages()
    const message = useMessage(selectedMessage)

    const handleMessageClick = (messageId: number) => {
        setSelectedMessage(messageId)
    }

    useEffect(() => {
        if (messages.isSuccess && messages.data.length > 0) {
            setSelectedMessage(messages.data[0].messageId)
        }
    }, [messages.isSuccess, messages.data])

    return (
        <main className="grid grid-cols-2 w-full">
            <div className="flex flex-col border-r w-full h-[calc(100vh-65px)]">
                <CreateMessageForm
                    className="self-end px-6 my-4"
                    open={dialogOpen}
                    dialogOnChange={setDialogOpen}
                />
                <ScrollArea className="">
                    <div className="flex flex-col gap-2 px-6 mb-6">
                        {messages.isSuccess &&
                            messages.data.map((message) => (
                                <button
                                    key={message.messageId}
                                    className={cn(
                                        'flex flex-col items-start gap-2 rounded-lg border p-0 text-left text-sm transition-all hover:bg-accent',
                                        message.messageId === selectedMessage &&
                                            'bg-accent'
                                    )}
                                    onClick={() =>
                                        handleMessageClick(message.messageId)
                                    }
                                >
                                    <MessageCard message={message} />
                                </button>
                            ))}
                    </div>
                </ScrollArea>
            </div>

            {message.isSuccess && (
                <MessageDisplay
                    message={message.data ? message.data : ({} as MessageDto)}
                />
            )}
        </main>
    )
}
