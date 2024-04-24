import { useQuery } from '@tanstack/react-query'
import { ClientDto } from '@/lib/types/application/clients/client.dto'
import useAxios from '@/lib/hooks/use-axios'
import { ClientGroupWithClientsDto } from '@/lib/types/application/client-groups/client-groups.dto'

export function useClientGroup(clientId: number) {
    return useQuery<ClientGroupWithClientsDto, Error>({
        queryKey: ['client-group', clientId],
        queryFn: () => getClientGroup(clientId),
        enabled: !!clientId,
    })
}
async function getClientGroup(clientId: number) {
    const response = await useAxios.get(`/client-groups/${clientId}`)
    return response.data
}
