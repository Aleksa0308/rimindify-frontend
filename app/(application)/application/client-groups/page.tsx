'use client'
import { ClientGroupCard } from '@/app/(application)/application/client-groups/client-group-card'
import { Button } from '@/components/ui/button'
import { useClientGroups } from '@/lib/hooks/client-groups/use-client-groups'
import { CreateClientGroupForm } from '@/app/(application)/application/client-groups/create-client-group-form'
import { useState } from 'react'

export default function ClientGroups() {
    const clientGroups = useClientGroups()
    const [dialogOpen, setDialogOpen] = useState(false)
    return (
        <main className="flex flex-col mt-4 gap-2 container">
            <CreateClientGroupForm
                className="self-end"
                open={dialogOpen}
                dialogOnChange={setDialogOpen}
            />
            <section className="grid grid-cols-3 gap-2">
                {clientGroups.isSuccess &&
                    clientGroups.data.map((clientGroup) => (
                        <ClientGroupCard
                            key={clientGroup.clientGroupId}
                            clientGroup={clientGroup}
                        />
                    ))}
            </section>
        </main>
    )
}
