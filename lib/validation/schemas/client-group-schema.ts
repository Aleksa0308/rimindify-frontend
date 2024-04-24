import { z } from 'zod'

export const clientGroupSchema = z.object({
    name: z.string().min(3, {
        message: 'First name must be at least 3 characters long',
    }),
    description: z.string().optional(),
})
