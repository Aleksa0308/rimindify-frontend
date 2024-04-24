import { useQuery } from '@tanstack/react-query'
import useAxios from '@/lib/hooks/use-axios'

export function useMessage(messageId: number | null) {
    return useQuery<MessageDto, Error>({
        queryKey: ['messages', messageId],
        queryFn: () => getMessage(messageId),
        enabled: !!messageId,
    })
}
async function getMessage(messageId: number | null) {
    const response = await useAxios.get(`/messages/${messageId}`)
    return response.data
}
