import { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { MoreHorizontal, Trash2 } from 'lucide-react'
import { EditClientForm } from '@/app/(application)/application/clients/edit-client-form'
import { ClientDto } from '@/lib/types/application/clients/client.dto'
import { Row } from '@tanstack/table-core'
import { useDeleteClientMutation } from '@/lib/hooks/mutations/use-delete-client-mutation'
interface RowActionsProps {
    row: Row<ClientDto>
}
export function RowActions({ row }: RowActionsProps) {
    const client = row.original
    const [open, setOpen] = useState(false)
    const deleteMutation = useDeleteClientMutation()

    const handleDeleteClient = () => {
        deleteMutation.mutate(client.clientId)
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <EditClientForm
                    clientId={client.clientId}
                    open={open}
                    dialogOnChange={setOpen}
                />

                <DropdownMenuItem
                    className="flex gap-1 items-center text-destructive"
                    onClick={() => handleDeleteClient()}
                >
                    <Trash2 className="h-4 w-4" />
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
