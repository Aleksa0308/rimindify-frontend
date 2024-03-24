import { MessageCard } from '@/app/(application)/application/messages/message-card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MessageDisplay } from '@/app/(application)/application/messages/message-display'

export default function Messages() {
    return (
        <main className="grid grid-cols-2 w-full gap-1">
            <ScrollArea className="w-full h-[calc(100vh-65px)] border-r">
                <div className="flex flex-col gap-2 px-6 py-6">
                    <MessageCard />
                    <MessageCard />
                    <MessageCard />
                </div>
            </ScrollArea>
            <div>
                <MessageDisplay />
            </div>
        </main>
    )
}
