'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'
import { useForm } from 'react-hook-form'
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
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '@/lib/validation/schemas/login-schema'
import { useSigninMutation } from '@/lib/hooks/mutations/use-signin-mutation'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}
export function UserLoginForm({ className, ...props }: UserAuthFormProps) {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur',
    })
    const mutation = useSigninMutation()
    async function onSubmit(values: z.infer<typeof loginSchema>) {
        mutation.mutate(values)
    }

    return (
        <div className={cn('grid gap-6', className)} {...props}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-2">
                        <div className="grid gap-1">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            className="sr-only"
                                            htmlFor="email"
                                        >
                                            Email
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                id="email"
                                                placeholder="name@example.com"
                                                type="email"
                                                autoCapitalize="none"
                                                autoComplete="email"
                                                autoCorrect="off"
                                                disabled={mutation.isPending}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name={'password'}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            className="sr-only"
                                            htmlFor="email"
                                        >
                                            Password
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                id="password"
                                                placeholder="Password"
                                                type="password"
                                                autoCapitalize="none"
                                                autoComplete="password"
                                                autoCorrect="off"
                                                disabled={mutation.isPending}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button type="submit" disabled={mutation.isPending}>
                            Login
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
