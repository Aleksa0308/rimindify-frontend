export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <nav>Nav Home</nav>
            {children}
        </div>
    )
}
