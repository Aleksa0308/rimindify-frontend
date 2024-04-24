import { useQuery } from '@tanstack/react-query'
import { ClientDto } from '@/lib/types/application/clients/client.dto'
import useAxios from '@/lib/hooks/use-axios'
import { ClientGroupWithClientsDto } from '@/lib/types/application/client-groups/client-groups.dto'

export function useMissingClients(clientGroupId: number, search: string) {
    return useQuery<ClientDto[], Error>({
        queryKey: ['missing-clients', clientGroupId, search],
        queryFn: () => getMissingClients(clientGroupId, search),
        enabled: !!clientGroupId,
    })
}
async function getMissingClients(clientGroupId: number, search: string) {
    const response = await useAxios.get(
        `/client-groups/${clientGroupId}/missing-clients?search=${search}`
    )
    return response.data
}
