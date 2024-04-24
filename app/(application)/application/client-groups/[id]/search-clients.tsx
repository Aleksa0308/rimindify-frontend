import { useState } from 'react'
import { ClientDto } from '@/lib/types/application/clients/client.dto'
import SearchClientsResults from '@/app/(application)/application/client-groups/[id]/search-clients-results'
import { Command, CommandInput } from '@/components/ui/command'

export interface SearchProps {
    clientGroupId: number
    selectedResult?: ClientDto
    onSelectResult: (client: ClientDto) => void
}
export default function SearchClients({
    clientGroupId,
    selectedResult,
    onSelectResult,
}: SearchProps) {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSelectResult = (client: ClientDto) => {
        onSelectResult(client)
        setSearchQuery('')
    }

    return (
        <Command
            shouldFilter={false}
            className="h-auto rounded-lg border border-b-0 shadow-md"
        >
            <CommandInput
                value={searchQuery}
                onValueChange={setSearchQuery}
                placeholder="Search for a client..."
            />

            <SearchClientsResults
                clientGroupId={clientGroupId}
                query={searchQuery}
                selectedResult={selectedResult}
                onSelectResult={handleSelectResult}
            />
        </Command>
    )
}
