import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function ClientGroupCard() {
    return (
        <Card className=" bg-transparent">
            <CardHeader>
                <CardTitle>Group name</CardTitle>
                <CardDescription>Description</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className="flex justify-end">
                <Button variant="secondary">View Group</Button>
            </CardFooter>
        </Card>
    )
}
