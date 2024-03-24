import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import React from 'react'

interface ActionConfirmationDialogProps
    extends React.HTMLAttributes<HTMLDivElement> {
    buttonText: string
    onAction: (arg: boolean) => void
    dialogTitle: string
    dialogDescription?: string
    open: boolean
    dialogOnChange: (open: boolean) => void
    buttonStyle?: string
    buttonVariant?:
        | 'default'
        | 'secondary'
        | 'destructive'
        | 'outline'
        | 'link'
        | 'ghost'
    buttonIcon?: React.ReactNode
}
export function ActionConfirmationDialog({
    buttonText,
    onAction,
    dialogTitle,
    dialogDescription,
    open,
    dialogOnChange,
    buttonStyle,
    buttonIcon,
    buttonVariant,
}: ActionConfirmationDialogProps) {
    return (
        <Dialog open={open} onOpenChange={() => dialogOnChange(!open)}>
            <DialogTrigger asChild>
                <Button variant={buttonVariant} className={buttonStyle}>
                    {buttonIcon && buttonIcon}
                    {buttonText}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{dialogTitle}</DialogTitle>
                    <DialogDescription>{dialogDescription}</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        variant="ghost"
                        onClick={() => {
                            onAction(false)
                            dialogOnChange(false)
                        }}
                    >
                        Close
                    </Button>
                    <Button
                        onClick={() => {
                            onAction(true)
                            dialogOnChange(false)
                        }}
                    >
                        Confirm
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
