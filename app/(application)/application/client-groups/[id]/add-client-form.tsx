'use client'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { AddClientFormSchema } from '@/lib/validation/schemas/add-client-form-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { ChevronsUpDown } from 'lucide-react'
import { useCallback, useState } from 'react'
import { ClientDto } from '@/lib/types/application/clients/client.dto'
import SearchClients from '@/app/(application)/application/client-groups/[id]/search-clients'
import { useAddClientToGroup } from '@/lib/hooks/client-groups/use-add-client-to-group'

const POPOVER_WIDTH = 'w-full'

interface AddClientFormProps {
    clientGroupId: number
}
export default function AddClientForm({ clientGroupId }: AddClientFormProps) {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState<ClientDto | undefined>()
    const form = useForm<z.infer<typeof AddClientFormSchema>>({
        resolver: zodResolver(AddClientFormSchema),
        defaultValues: {
            clientId: undefined,
        },
        mode: 'onBlur',
    })

    const addClientToGroupMutation = useAddClientToGroup(clientGroupId)

    const handleSetActive = useCallback(
        (client: ClientDto) => {
            setSelected(client)
            form.setValue('clientId', client.clientId)
        },
        [form]
    )

    const displayName =
        selected?.firstName && selected.phone
            ? selected?.firstName + ' ' + selected?.phone
            : 'Select a client'

    const onSubmit = (data: z.infer<typeof AddClientFormSchema>) => {
        addClientToGroupMutation.mutate({ clientId: data.clientId })
        //reset
        form.reset()
        setSelected(undefined)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
                <FormField
                    control={form.control}
                    name="clientId"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        className={cn(
                                            'justify-between',
                                            POPOVER_WIDTH
                                        )}
                                    >
                                        {displayName}
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>

                                <PopoverContent
                                    side="bottom"
                                    className={cn('p-0', POPOVER_WIDTH)}
                                >
                                    <SearchClients
                                        clientGroupId={clientGroupId}
                                        selectedResult={selected}
                                        onSelectResult={handleSetActive}
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormDescription>
                                This is the client that will be added to the
                                group.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
