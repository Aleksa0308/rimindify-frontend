import { ColumnDef } from '@tanstack/table-core'
import { ClientDto } from '@/lib/types/application/clients/client.dto'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { MoreHorizontal, Pencil, Trash2 } from 'lucide-react'

export const clientColumns: ColumnDef<ClientDto>[] = [
    {
        accessorKey: 'firstName',
        header: 'First Name',
    },
    {
        accessorKey: 'lastName',
        header: 'Last Name',
    },
    {
        accessorKey: 'nickName',
        header: 'Nick Name',
    },
    {
        accessorKey: 'phone',
        header: 'Phone',
    },
    {
        accessorKey: 'appointment',
        header: 'Appointment',
        cell: ({ row }) =>
            new Date(row.getValue('appointment')).toLocaleDateString(),
    },
    {
        id: 'Actions',
        enableHiding: false,
        cell: ({ row }) => {
            const client = row.original

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
                        <DropdownMenuItem
                            className="flex gap-1 items-center"
                            onClick={() =>
                                navigator.clipboard.writeText(
                                    String(client.clientId)
                                )
                            }
                        >
                            <Pencil className="h-4 w-4" />
                            Edit
                        </DropdownMenuItem>

                        <DropdownMenuItem
                            className="flex gap-1 items-center text-destructive"
                            onClick={() =>
                                navigator.clipboard.writeText(
                                    String(client.clientId)
                                )
                            }
                        >
                            <Trash2 className="h-4 w-4" />
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
