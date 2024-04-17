import { usePathname } from 'next/navigation'
import { Separator } from '@/components/ui/separator'

export function PageTitle() {
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
        <div>
            <div
                className={
                    'mt-5 h-full font-medium text-lg align-middle container'
                }
            >
                {formattedPathname(pathname)}
            </div>
            <Separator className={'mt-4'} />
        </div>
    )
}
