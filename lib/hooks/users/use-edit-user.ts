import { useMutation, useQueryClient } from '@tanstack/react-query'
import useAxios from '@/lib/hooks/use-axios'
import { CreateClientDto } from '@/lib/types/application/clients/client.dto'
import { toast } from 'sonner'
import { UpdateUserDto } from '@/lib/types/application/users/user.dto'

export function useEditEditUser() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (userData: UpdateUserDto) =>
            useAxios.put(`/users/me`, userData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user'] })
            toast.success('User information updated successfully')
        },
        onError: (error) => {
            toast.error('Failed to update user information')
        },
    })
}
