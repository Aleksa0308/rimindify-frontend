'use client'
import { NavItem } from '@/types/application/sidebar-nav.dto'
import { Calendar, Mails, User, Users, UserPlus } from 'lucide-react'
import { SidebarNav } from '@/components/application/sidebar-nav'
import Link from 'next/link'
import { Icons } from '@/components/icons'
import { Separator } from '@/components/ui/separator'
const actionLinks: NavItem[] = [
    {
        title: 'Schedule',
        href: '/application',
        icon: Calendar,
    },
    {
        title: 'Clients',
        href: '/application/clients',
        icon: UserPlus,
    },
    {
        title: 'Client Groups',
        href: '/application/client-groups',
        icon: Users,
    },
    {
        title: 'Messages',
        href: '/application/messages',
        icon: Mails,
    },
]

const profileLinks: NavItem[] = [
    {
        title: ' My Profile',
        href: '/application/profile',
        icon: User,
    },
]

export default function ApplicationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className={'flex'}>
            <section className={'border-r'}>
                <div className={'mt-4 px-4'}>
                    <Link
                        href="/"
                        className={'flex gap-2 items-center justify-center'}
                    >
                        <Icons.rimindifyLogo className="h-8 w-8 fill-current" />
                        <span className="text-2xl font-bold">Rimindify</span>
                    </Link>
                </div>
                <Separator className={'my-4'} />
                <SidebarNav navLinks={actionLinks} />
                <Separator className={'my-4'} />
                <SidebarNav navLinks={profileLinks} />
            </section>
            {children}
        </div>
    )
}
