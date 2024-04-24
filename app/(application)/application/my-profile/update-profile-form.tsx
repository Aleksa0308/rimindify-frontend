'use client'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { updateProfileSchema } from '@/lib/validation/schemas/update-profile-schema'
import { useMe } from '@/lib/hooks/users/use-me'
import { useEffect } from 'react'
import { useEditEditUser } from '@/lib/hooks/users/use-edit-user'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import * as React from 'react'
import { cn } from '@/lib/utils'

interface UpdateProfileFormProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function UpdateProfileForm({
    className,
}: UpdateProfileFormProps) {
    const user = useMe()
    const form = useForm<z.infer<typeof updateProfileSchema>>({
        resolver: zodResolver(updateProfileSchema),
        defaultValues: {
            whatsapp: '',
            viber: '',
        },
        mode: 'onBlur',
    })

    const mutation = useEditEditUser()

    async function onSubmit(values: z.infer<typeof updateProfileSchema>) {
        mutation.mutate(values)
    }

    useEffect(() => {
        if (user.isSuccess) {
            form.reset(user.data)
        }
    }, [user.isSuccess, user.data])

    return (
        <div className={cn(className)}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-4 py-4">
                        <FormField
                            control={form.control}
                            name="whatsapp"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="whatsapp">
                                        WhatsApp
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            id="whatsapp"
                                            placeholder="Whatsapp number"
                                            type="text"
                                            autoCapitalize="none"
                                            autoCorrect="off"
                                            // disabled={
                                            //     mutation.isPending
                                            // }
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="viber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="viber">Viber</FormLabel>
                                    <FormControl>
                                        <Input
                                            id="viber"
                                            placeholder="Viber number"
                                            type="text"
                                            autoCapitalize="none"
                                            autoCorrect="off"
                                            // disabled={
                                            //     mutation.isPending
                                            // }
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button
                        type="submit"
                        // disabled={mutation.isPending}
                    >
                        Update profile
                    </Button>
                </form>
            </Form>
        </div>
    )
}
