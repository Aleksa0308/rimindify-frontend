'use client'
import { CreateClientForm } from '@/app/(application)/application/clients/create-client-form'
import { useClients } from '@/lib/hooks/clients/use-clients'
import { DataTable } from '@/app/(application)/application/clients/data-table'
import { columns } from '@/app/(application)/application/clients/columns'
import { ClientDto } from '@/lib/types/application/clients/client.dto'
import { useState } from 'react'

export default function Clients() {
    const clients = useClients()
    const [dialogOpen, setDialogOpen] = useState(false)
    return (
        <main className="flex flex-col gap-2 container mt-4">
            <CreateClientForm
                className="self-end"
                open={dialogOpen}
                dialogOnChange={setDialogOpen}
            />
            <DataTable
                columns={columns}
                data={clients.isSuccess ? clients.data : []}
            />
        </main>
    )
}
