import { z } from 'zod'

export const clientSchema = z.object({
    firstName: z.string().min(3, {
        message: 'First name must be at least 3 characters long',
    }),
    lastName: z.string(),
    nickName: z.string(),
    phone: z.string().regex(/^\+381\d{7,9}$/, {
        message: 'Phone number must start with +381',
    }),
    appointment: z.date(),
})
