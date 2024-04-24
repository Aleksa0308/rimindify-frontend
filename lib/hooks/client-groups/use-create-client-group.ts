import { useMutation, useQueryClient } from '@tanstack/react-query'
import useAxios from '@/lib/hooks/use-axios'
import {
    ClientDto,
    CreateClientDto,
} from '@/lib/types/application/clients/client.dto'
import { toast } from 'sonner'
import { CreateClientGroupDto } from '@/lib/types/application/client-groups/client-groups.dto'

export function useCreateClientGroup(dialogOnChange: (state: boolean) => void) {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (clientGroupData: CreateClientGroupDto) =>
            useAxios.post('/client-groups', clientGroupData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['client-groups'] })
            toast.success('Client Group created successfully')
            dialogOnChange(false)
        },
        onError: (error) => {
            toast.error('Failed to create client group')
        },
    })
}
