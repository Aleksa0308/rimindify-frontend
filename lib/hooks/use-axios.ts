import axios from 'axios'
import { toast } from 'sonner'

const useAxios = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        'Content-Type': 'application/json',
    },
})
// Request interceptor
useAxios.interceptors.request.use(
    (config) => {
        // Modify the request config here (add headers, authentication tokens)
        const accessToken = 'aaaa'

        // If token is present add it to request's Authorization Header
        if (accessToken) {
            if (config.headers) config.headers.Authorization = accessToken
        }
        return config
    },
    (error) => {
        // Handle request errors here
        toast.error(error.message)
        return Promise.reject(error)
    }
)

// Response interceptor
useAxios.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        //! Display toast notification for errors
        toast.error(error.message)
        return Promise.reject(error)
    }
)
export default useAxios
