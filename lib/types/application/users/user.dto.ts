export interface UserDto {
    userId: number
    email: string
    whatsapp: string
    viber: string
}

export interface UpdateUserDto {
    whatsapp?: string
    viber?: string
}
