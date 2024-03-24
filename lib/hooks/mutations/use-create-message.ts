import { useMutation, useQueryClient } from '@tanstack/react-query'
import useAxios from '@/lib/hooks/use-axios'
import {
    ClientDto,
    CreateClientDto,
} from '@/lib/types/application/clients/client.dto'
import { toast } from 'sonner'

export function useCreateMessageMutation(
    dialogOnChange: (state: boolean) => void
) {
    return useMutation({
        mutationFn: (messageData: MessageWithoutIdsDto) =>
            useAxios.post(`/messages`, messageData),
        onSuccess: () => {
            toast.success('Message created successfully')
            dialogOnChange(false)
        },
        onError: (error) => {
            toast.error('Failed to create message')
        },
    })
}
