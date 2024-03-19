import useAxios from '@/lib/hooks/use-axios'
import { LoginRequestDto } from '@/types/auth/login-request.dto'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { AxiosResponse } from 'axios'
import { LoginResponseDto } from '@/types/auth/login-response.dto'

export function useSigninMutation() {
    const router = useRouter()

    return useMutation({
        mutationFn: (credentials: LoginRequestDto) =>
            useAxios.post('/auth/signin', credentials),
        onSuccess: (data: AxiosResponse<LoginResponseDto>) => {
            const accessToken = data.data.access_token
            console.log('accessToken', accessToken)
            Cookies.set('token', accessToken)
            router.push('/application')
        },
    })
}
