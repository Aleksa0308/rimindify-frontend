import { useMutation, useQueryClient } from '@tanstack/react-query'
import useAxios from '@/lib/hooks/use-axios'
import {
    ClientDto,
    CreateClientDto,
} from '@/lib/types/application/clients/client.dto'
import { toast } from 'sonner'

export function useAddClientToGroup(clientGroupId: number) {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (clientData: { clientId: number }) =>
            useAxios.post(
                `/client-groups/${clientGroupId}/add-client`,
                clientData
            ),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['client-groups'],
            })
            queryClient.invalidateQueries({
                queryKey: ['missing-clients'],
            })
            toast.success('Client added successfully')
        },
        onError: (error) => {
            toast.error('Failed to add client')
        },
    })
}
