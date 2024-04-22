'use client'
import { ClientGroupCard } from '@/app/(application)/application/client-groups/client-group-card'
import { Button } from '@/components/ui/button'
import { useClientGroups } from '@/lib/hooks/client-groups/use-client-groups'

export default function ClientGroups() {
    const clientGroups = useClientGroups()
    return (
        <main className="flex flex-col mt-4 gap-2 container">
            <Button className="self-end">Create a Group +</Button>
            {/* Grid of client group cards*/}
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
