import { ColumnDef } from '@tanstack/table-core'
import { ClientDto } from '@/lib/types/application/clients/client.dto'
import { Button } from '@/components/ui/button'
import { ArrowUpDown, MoreHorizontal, Pencil, Trash2 } from 'lucide-react'
import { EditClientForm } from '@/app/(application)/application/clients/edit-client-form'
import { useState } from 'react'
import { RowActions } from '@/app/(application)/application/clients/row-actions'

export const columns: ColumnDef<ClientDto>[] = [
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
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }
                >
                    Appointment
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) =>
            new Date(row.getValue('appointment')).toLocaleDateString(),
    },
    {
        id: 'Actions',
        enableHiding: false,
        cell: ({ row }) => {
            const client = row.original
            return <RowActions row={row} />
        },
    },
]
