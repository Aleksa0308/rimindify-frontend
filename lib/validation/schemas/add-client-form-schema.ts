import { z } from 'zod'

export const AddClientFormSchema = z.object({
    clientId: z.number({
        required_error: 'Please select a client',
    }),
})
