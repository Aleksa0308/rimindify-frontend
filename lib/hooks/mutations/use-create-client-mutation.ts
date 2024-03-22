import { useMutation, useQueryClient } from '@tanstack/react-query'
import useAxios from '@/lib/hooks/use-axios'
import {
    ClientDto,
    CreateClientDto,
} from '@/lib/types/application/clients/client.dto'
import { toast } from 'sonner'

export function useCreateClientMutation(
    dialogOnChange: (state: boolean) => void
) {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (clientData: CreateClientDto) =>
            useAxios.post('/clients', clientData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['clients'] })
            toast.success('Client created successfully')
            dialogOnChange(false)
        },
        onError: (error) => {
            toast.error('Failed to create client')
        },
    })
}
