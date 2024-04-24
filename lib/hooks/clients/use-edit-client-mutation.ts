import { useMutation, useQueryClient } from '@tanstack/react-query'
import useAxios from '@/lib/hooks/use-axios'
import { CreateClientDto } from '@/lib/types/application/clients/client.dto'
import { toast } from 'sonner'

export function useEditClientMutation(
    dialogOnChange: (state: boolean) => void,
    clientId: number
) {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (clientData: CreateClientDto) =>
            useAxios.put(`/clients/${clientId}`, clientData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['clients'] })
            toast.success('Client edited successfully')
            dialogOnChange(false)
        },
        onError: (error) => {
            toast.error('Failed to edit client')
        },
    })
}
