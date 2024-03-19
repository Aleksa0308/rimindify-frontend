'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useState } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from '@/components/theme-provider'

export default function Providers({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 6 * 1000,
                        refetchInterval: 6 * 1000,
                    },
                },
            })
    )

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
            <Toaster position={'top-center'} richColors closeButton />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}
