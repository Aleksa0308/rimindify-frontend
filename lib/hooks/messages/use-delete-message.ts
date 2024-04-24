import { useMutation, useQueryClient } from '@tanstack/react-query'
import useAxios from '@/lib/hooks/use-axios'
import {
    ClientDto,
    CreateClientDto,
} from '@/lib/types/application/clients/client.dto'
import { toast } from 'sonner'

export function useDeleteMessageMutation() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (messageId: number) =>
            useAxios.delete(`/messages/${messageId}`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['messages'] })
            queryClient.invalidateQueries({ queryKey: ['messages'] })
            toast.success('Message deleted successfully')
        },
        onError: (error) => {
            toast.error('Failed to delete message')
        },
    })
}
