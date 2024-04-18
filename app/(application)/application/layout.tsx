'use client'
import { NavItem } from '@/lib/types/application/sidebar-nav'
import {
    Calendar,
    Mails,
    User,
    Users,
    UserPlus,
    LayoutDashboard,
} from 'lucide-react'
import { SidebarNav } from '@/components/application/sidebar-nav'
import Link from 'next/link'
import { Icons } from '@/components/icons'
import { Separator } from '@/components/ui/separator'
import { PageTitle } from '@/components/application/page-title'
import { ScrollArea } from '@/components/ui/scroll-area'
const actionLinks: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/application/dashboard',
        icon: LayoutDashboard,
    },
    {
        title: 'Schedule',
        href: '/application/schedule',
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
        <div className={'flex h-screen'}>
            <section
                className={
                    'border-r w-[200px] fixed top-0 left-0 h-full overflow-y-auto'
                }
            >
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
            <section className="flex-1 pt-16 pl-[200px] h-screen overflow-y-auto">
                <div className="fixed bg-background top-0 pr-[200px] w-full z-10">
                    <PageTitle />
                </div>
                <div>
                    <section className="">
                        <ScrollArea>{children}</ScrollArea>
                    </section>
                </div>
            </section>
        </div>
    )
}
