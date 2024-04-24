interface MessageDto {
    messageId: number
    userId: number
    title: string
    content: string
}
interface MessageWithoutIdsDto {
    title: string
    content: string
}
