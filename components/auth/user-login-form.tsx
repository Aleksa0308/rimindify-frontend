'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}
export function UserLoginForm({ className, ...props }: UserAuthFormProps) {
    const form = useForm()
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    async function onSubmit() {
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }

    return (
        <div className={cn('grid gap-6', className)} {...props}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-2">
                        <div className="grid gap-1">
                            <FormLabel className="sr-only" htmlFor="email">
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
                                    disabled={isLoading}
                                />
                            </FormControl>
                            <FormLabel className="sr-only" htmlFor="email">
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
                                    disabled={isLoading}
                                />
                            </FormControl>
                        </div>
                        <Button disabled={isLoading}>Login</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
