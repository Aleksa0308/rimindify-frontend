import { useQuery } from '@tanstack/react-query'
import useAxios from '@/lib/hooks/use-axios'
import { ClientGroupDto } from '@/lib/types/application/client-groups/client-groups.dto'

export function useClientGroups() {
    return useQuery<ClientGroupDto[], Error>({
        queryKey: ['client-groups'],
        queryFn: () => getClientGroups(),
    })
}
async function getClientGroups() {
    const response = await useAxios.get('/client-groups')
    return response.data
}
