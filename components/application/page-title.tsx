import { usePathname } from 'next/navigation'
import { Separator } from '@/components/ui/separator'
import { ThemeModeToggle } from '@/components/theme-mode-toggle'
import { Button } from '@/components/ui/button'
import { LogOutIcon } from 'lucide-react'
import { useLogout } from '@/lib/hooks/auth/use-logout'

export function PageTitle() {
    const logout = useLogout()
    const pathname = usePathname()
    const getLastSegment = (path: string) => {
        const segments = path.split('/')
        return segments[segments.length - 1]
    }

    const formattedPathname = (path: string) => {
        const lastSegment = getLastSegment(path)
        return lastSegment
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (l) => l.toUpperCase())
    }

    return (
        <>
            <div
                className={
                    'px-6 h-full font-medium text-lg flex justify-between items-center'
                }
            >
                {formattedPathname(pathname)}
                <div className="flex gap-2">
                    {/*Logout button*/}
                    <Button variant="outline" onClick={logout}>
                        <span className="flex gap-1 items-center">
                            <LogOutIcon size={16} />
                            Logout
                        </span>
                    </Button>
                    <ThemeModeToggle />
                </div>
            </div>
            <Separator className={''} />
        </>
    )
}
