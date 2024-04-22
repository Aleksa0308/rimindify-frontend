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
import { useRouter } from 'next/navigation'

interface ClientGroupCardProps {
    clientGroup: ClientGroupDto
}
export function ClientGroupCard({ clientGroup }: ClientGroupCardProps) {
    const router = useRouter()
    const navigateToSingleGroup = (clientGroupId: number) => () => {
        router.push(`/application/client-groups/${clientGroupId}`)
    }
    return (
        <Card className="bg-transparent">
            <CardHeader>
                <CardTitle>{clientGroup.name}</CardTitle>
                <CardDescription>
                    {clientGroup.description ? (
                        clientGroup.description
                    ) : (
                        <blockquote className="italic">
                            No Description
                        </blockquote>
                    )}
                </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className="flex justify-end">
                <Button
                    variant="secondary"
                    onClick={navigateToSingleGroup(clientGroup.clientGroupId)}
                >
                    View Group
                </Button>
            </CardFooter>
        </Card>
    )
}
