import { useMutation, useQueryClient } from '@tanstack/react-query'
import useAxios from '@/lib/hooks/use-axios'
import { toast } from 'sonner'

export function useRemoveClientFromGroup() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: { clientGroupId: number; clientId: number }) =>
            useAxios.delete(
                `/client-groups/${data.clientGroupId}/remove-client/${data.clientId}`
            ),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['client-groups'] })
            toast.success('Client removed from the group successfully')
        },
        onError: (error) => {
            toast.error('Failed to remove client')
        },
    })
}
