import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'

export function MessageCard() {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Podsetnik</CardTitle>
                <CardDescription>
                    Uskoro Vam istice Registracija!
                </CardDescription>
            </CardHeader>
        </Card>
    )
}
