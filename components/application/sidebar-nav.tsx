'use client'
import { NavItem } from '@/types/application/sidebar-nav'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

export function SidebarNav({ navLinks }: { navLinks: NavItem[] }) {
    const pathname = usePathname()
    return (
        <nav className="flex flex-col items-start px-2">
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href)
                return (
                    <Link
                        className={cn(
                            buttonVariants({
                                variant: isActive ? 'secondary' : 'ghost',
                                size: 'sm',
                            }),
                            'w-full flex justify-start'
                        )}
                        key={link.href}
                        href={link.href}
                    >
                        <link.icon className="mr-2 h-5 w-5" />
                        {link.title}
                    </Link>
                )
            })}
        </nav>
    )
}
