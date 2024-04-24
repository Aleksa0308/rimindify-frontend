import { z } from 'zod'

export const updateProfileSchema = z.object({
    whatsapp: z.string().optional().nullish(),
    viber: z.string().optional().nullish(),
})
