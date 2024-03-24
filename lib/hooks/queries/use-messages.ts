import { useQuery } from '@tanstack/react-query'
import useAxios from '@/lib/hooks/use-axios'

export function useMessages() {
    return useQuery<MessageDto[], Error>({
        queryKey: ['messages'],
        queryFn: () => getMessages(),
    })
}
async function getMessages() {
    const response = await useAxios.get('/messages')
    return response.data
}
