import { ThemeModeToggle } from '@/components/theme-mode-toggle'

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <nav>
                <ThemeModeToggle />
            </nav>
            {children}
        </div>
    )
}
