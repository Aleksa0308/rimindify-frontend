import { useRouter } from 'next/navigation'

export const useLogout = () => {
    const router = useRouter()

    const logout = () => {
        // Remove token from local storage
        localStorage.removeItem('accessToken')

        // Redirect the users to the login page
        router.push('/login')
    }

    return logout
}
