'use client'
import { CreateClientForm } from '@/app/(application)/application/clients/create-client-form'
import { useClients } from '@/lib/hooks/queries/use-clients'
import { DataTable } from '@/app/(application)/application/data-table'
import { clientColumns } from '@/app/(application)/application/clients/client-columns'
import { ClientDto } from '@/lib/types/application/clients/client.dto'
import { useState } from 'react'

export default function Clients() {
    const clients = useClients()
    const [dialogOpen, setDialogOpen] = useState(false)
    return (
        <main className="flex flex-col gap-2">
            <CreateClientForm
                className="self-end"
                open={dialogOpen}
                dialogOnChange={setDialogOpen}
            />
            <DataTable
                columns={clientColumns}
                data={clients.isSuccess ? clients.data : []}
            />
        </main>
    )
}
