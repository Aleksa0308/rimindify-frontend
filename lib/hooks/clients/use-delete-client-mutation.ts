import { useMutation, useQueryClient } from '@tanstack/react-query'
import useAxios from '@/lib/hooks/use-axios'
import { toast } from 'sonner'

export function useDeleteClientMutation() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (clientId: number) =>
            useAxios.delete(`/clients/${clientId}`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['clients'] })
            toast.success('Client deleted successfully')
        },
        onError: (error) => {
            toast.error('Failed to delete client')
        },
    })
}
