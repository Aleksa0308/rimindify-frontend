import { useQuery } from '@tanstack/react-query'
import { ClientDto } from '@/lib/types/application/clients/client.dto'
import useAxios from '@/lib/hooks/use-axios'
import { UserDto } from '@/lib/types/application/users/user.dto'

export function useMe() {
    return useQuery<UserDto, Error>({
        queryKey: ['user'],
        queryFn: () => getUser(),
    })
}
async function getUser() {
    const response = await useAxios.get(`/users/me`)
    return response.data
}
