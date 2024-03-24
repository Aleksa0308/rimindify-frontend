import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
interface MessageCardProps {
    message: MessageDto
}
export function MessageCard({ message }: MessageCardProps) {
    const formatMessageLength = (content: string) => {
        return content.length > 100 ? `${content.slice(0, 100)}...` : content
    }
    return (
        <Card className="w-full bg-transparent border-none">
            <CardHeader>
                <CardTitle>{message.title}</CardTitle>
                <CardDescription>
                    {formatMessageLength(message.content)}
                </CardDescription>
            </CardHeader>
        </Card>
    )
}
