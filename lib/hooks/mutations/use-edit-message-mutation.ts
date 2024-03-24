import { useMutation, useQueryClient } from '@tanstack/react-query'
import useAxios from '@/lib/hooks/use-axios'
import {
    ClientDto,
    CreateClientDto,
} from '@/lib/types/application/clients/client.dto'
import { toast } from 'sonner'

export function useEditMessageMutation(messageId: number) {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (messageData: MessageWithoutIdsDto) =>
            useAxios.put(`/messages/${messageId}`, messageData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['messages'] })
            toast.success('Message edited successfully')
        },
        onError: (error) => {
            toast.error('Failed to edit message')
        },
    })
}
