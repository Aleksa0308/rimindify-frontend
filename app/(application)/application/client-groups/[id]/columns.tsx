import { ColumnDef } from '@tanstack/table-core'
import { Button } from '@/components/ui/button'
import { ArrowUpDown } from 'lucide-react'
import { RowActions } from '@/app/(application)/application/client-groups/[id]/row-actions'
import { ClientsWithGroupId } from '@/lib/types/application/client-groups/client-groups.dto'

export const columns: ColumnDef<ClientsWithGroupId>[] = [
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
