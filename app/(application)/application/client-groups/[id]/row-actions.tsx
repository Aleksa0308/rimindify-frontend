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
import { useRemoveClientFromGroup } from '@/lib/hooks/client-groups/use-remove-client-from-group'
import {
    ClientGroupWithClientsDto,
    ClientsWithGroupId,
} from '@/lib/types/application/client-groups/client-groups.dto'
interface RowActionsProps {
    row: Row<ClientsWithGroupId>
}
export function RowActions({ row }: RowActionsProps) {
    const client = row.original
    const removeMutation = useRemoveClientFromGroup()

    const handleRemoveClient = () => {
        removeMutation.mutate({
            clientGroupId: client.clientGroupId,
            clientId: client.clientId,
        })
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
                <Button
                    variant={'ghost'}
                    className="w-full flex gap-1 p-2 h-fit items-center justify-start text-destructive"
                    onClick={() => handleRemoveClient()}
                >
                    <Trash2 className="h-4 w-4" />
                    Remove
                </Button>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
