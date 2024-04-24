import { useMutation, useQueryClient } from '@tanstack/react-query'
import useAxios from '@/lib/hooks/use-axios'
import { toast } from 'sonner'

export function useDeleteClientGroup() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (clientGroupId: number) =>
            useAxios.delete(`/client-groups/${clientGroupId}`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['client-groups'] })
            toast.success('Client Group deleted successfully')
        },
        onError: (error) => {
            toast.error('Failed to delete client')
        },
    })
}
