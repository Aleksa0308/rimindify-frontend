import { ClientGroupCard } from '@/app/(application)/application/client-groups/client-group-card'

export default function ClientGroups() {
    return (
        <main className="grid grid-cols-3 gap-2 container mt-4">
            {/* Grid of client group cards*/}
            <ClientGroupCard />
            <ClientGroupCard />
            <ClientGroupCard />
        </main>
    )
}
