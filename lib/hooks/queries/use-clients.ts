import { useQuery } from '@tanstack/react-query'
import { ClientDto } from '@/lib/types/application/clients/client.dto'
import useAxios from '@/lib/hooks/use-axios'

export function useClients() {
    return useQuery<ClientDto[], Error>({
        queryKey: ['clients'],
        queryFn: () => getClients(),
    })
}
async function getClients() {
    const response = await useAxios.get('/clients')
    return response.data
}
