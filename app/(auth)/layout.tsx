export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <nav>Nav Auth</nav>
            {children}
        </div>
    )
}
