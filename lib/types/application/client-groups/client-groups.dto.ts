import { ClientDto } from '@/lib/types/application/clients/client.dto'

export interface ClientGroupDto {
    clientGroupId: number
    name: string
    description: string
}

export interface ClientGroupWithClientsDto extends ClientGroupDto {
    clients: ClientDto[]
}

export interface CreateClientGroupDto {
    name: string
    description?: string
}
