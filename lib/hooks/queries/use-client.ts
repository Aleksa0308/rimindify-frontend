import { useQuery } from '@tanstack/react-query'
import { ClientDto } from '@/lib/types/application/clients/client.dto'
import useAxios from '@/lib/hooks/use-axios'

export function useClient(clientId: number) {
    return useQuery<ClientDto, Error>({
        queryKey: ['client', clientId],
        queryFn: () => getClients(clientId),
    })
}
async function getClients(clientId: number) {
    const response = await useAxios.get(`/clients/${clientId}`)
    return response.data
}
