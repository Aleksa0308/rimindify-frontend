import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ClientGroupDto } from '@/lib/types/application/client-groups/client-groups.dto'

interface ClientGroupCardProps {
    clientGroup: ClientGroupDto
}
export function ClientGroupCard({ clientGroup }: ClientGroupCardProps) {
    return (
        <Card className=" bg-transparent">
            <CardHeader>
                <CardTitle>{clientGroup.name}</CardTitle>
                <CardDescription>
                    {clientGroup.description ? clientGroup.description : null}
                </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className="flex justify-end">
                <Button variant="secondary">View Group</Button>
            </CardFooter>
        </Card>
    )
}
