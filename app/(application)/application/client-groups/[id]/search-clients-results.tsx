import { SearchProps } from '@/app/(application)/application/client-groups/[id]/search-clients'
import { useDebounce } from 'use-debounce'
import { useMissingClients } from '@/lib/hooks/client-groups/use-missing-clients'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CommandGroup, CommandItem, CommandList } from '@/components/ui/command'
interface SearchClientsResultsProps {
    clientGroupId: number
    query: string
    selectedResult: SearchProps['selectedResult']
    onSelectResult: SearchProps['onSelectResult']
}
export default function SearchClientsResults({
    clientGroupId,
    query,
    selectedResult,
    onSelectResult,
}: SearchClientsResultsProps) {
    const [debouncedSearchQuery] = useDebounce(query, 500)

    const missingClients = useMissingClients(
        clientGroupId,
        debouncedSearchQuery
    )

    return (
        <CommandList>
            {missingClients.isLoading && (
                <div className="p-4 text-sm">Searching...</div>
            )}
            {!missingClients.isError &&
                !missingClients.isLoading &&
                !missingClients.data?.length && (
                    <div className="p-4 text-sm">No clients found</div>
                )}
            {missingClients.isError && (
                <div className="p-4 text-sm">Something went wrong</div>
            )}
            {missingClients.isSuccess &&
                missingClients.data?.map((client) => {
                    return (
                        <CommandItem
                            key={client.clientId}
                            onSelect={() => {
                                onSelectResult(client)
                            }}
                            value={client.clientId.toString()}
                        >
                            <Check
                                className={cn(
                                    'mr-2 h-4 w-4',
                                    selectedResult?.clientId === client.clientId
                                        ? 'opacity-100'
                                        : 'opacity-0'
                                )}
                            />
                            <div>
                                <p>
                                    {client.firstName +
                                        ' ' +
                                        client.lastName +
                                        ' ' +
                                        client.nickName}
                                </p>
                                <blockquote>{client.phone}</blockquote>
                            </div>
                        </CommandItem>
                    )
                })}
        </CommandList>
    )
}
