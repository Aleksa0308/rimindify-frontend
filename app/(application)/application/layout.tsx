export default function ApplicationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <nav>Nav Application</nav>
            {children}
        </div>
    )
}
