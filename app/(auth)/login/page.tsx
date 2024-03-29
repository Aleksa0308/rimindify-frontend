import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

import { cn } from '@/lib/utils'

import { UserLoginForm } from '@/app/(auth)/login/user-login-form'
import { Icons } from '@/components/icons'

export const metadata: Metadata = {
    title: 'Authentication',
    description: 'Authentication forms built using the components.',
}

export default function Login() {
    return (
        <>
            <div className="md:hidden">
                <Image
                    src="/examples/authentication-light.png"
                    width={1280}
                    height={843}
                    alt="Authentication"
                    className="block dark:hidden"
                />
                <Image
                    src="/examples/authentication-dark.png"
                    width={1280}
                    height={843}
                    alt="Authentication"
                    className="hidden dark:block"
                />
            </div>
            <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                    <div className="absolute inset-0 bg-zinc-900" />
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        <Icons.rimindifyLogo className="mr-2 h-8 w-8 fill-white" />
                        Rimindify
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                &ldquo;This library has saved me countless hours
                                of work and helped me deliver stunning designs
                                to my clients faster than ever before.&rdquo;
                            </p>
                            <footer className="text-sm">Sofia Davis</footer>
                        </blockquote>
                    </div>
                </div>
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Log in to your account
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Enter your email and password below to login to
                                your account
                            </p>
                        </div>
                        <UserLoginForm />
                    </div>
                </div>
            </div>
        </>
    )
}
