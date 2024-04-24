'use client'
import { useParams } from 'next/navigation'
import { useClientGroup } from '@/lib/hooks/client-groups/use-client-group'
import { columns } from '@/app/(application)/application/clients/columns'
import { DataTable } from '@/app/(application)/application/clients/data-table'
import { Trash2 } from 'lucide-react'
import { ActionConfirmationDialog } from '@/app/(application)/application/action-confirmation-dialog'
import * as React from 'react'
import { useState } from 'react'
import AddClientForm from '@/app/(application)/application/client-groups/[id]/add-client-form'

export default function ClientGroupById() {
    const router = useParams<{ id: string }>()
    const clientGroupId = parseInt(router.id)
    const clientGroup = useClientGroup(clientGroupId)
    const [dialogOpen, setDialogOpen] = useState(false)
    return (
        <section className="container mt-4 flex flex-col gap-2">
            <div className="flex items-center justify-between">
                {/* Display info */}
                <div>
                    <h1 className="text-lg font-semibold">
                        {clientGroup.isSuccess
                            ? clientGroup.data.name
                            : 'Loading...'}
                    </h1>
                    <blockquote className="italic text-muted-foreground text-sm">
                        {clientGroup.isSuccess
                            ? clientGroup.data.description ?? 'No Description'
                            : 'Loading...'}
                    </blockquote>
                </div>
                {/*Add Clients*/}
                <AddClientForm clientGroupId={clientGroupId} />
                <div className="flex gap-2 items-center">
                    {/*    Delete Button*/}
                    <ActionConfirmationDialog
                        buttonText="Delete"
                        open={dialogOpen}
                        dialogOnChange={setDialogOpen}
                        dialogTitle="Delete Group"
                        dialogDescription="Are you sure you want to delete this group?"
                        onAction={(confirmed) => {
                            if (confirmed) {
                                // delete message
                                console.log('delete group')
                            }
                        }}
                        buttonVariant={'destructive'}
                        buttonIcon={<Trash2 className="h-4 w-4" />}
                        buttonStyle={'flex gap-2 w-fit'}
                    />
                </div>
            </div>
            {/* Display clients in table */}
            <DataTable
                columns={columns}
                data={clientGroup.isSuccess ? clientGroup.data.clients : []}
            />
        </section>
    )
}
