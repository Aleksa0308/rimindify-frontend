export interface ClientDto {
    clientId: number
    firstName: string
    lastName: string
    nickName: string
    phone: string
    appointment: Date
}

export interface CreateClientDto {
    firstName: string
    lastName: string
    nickName: string
    phone: string
    appointment: Date
}
