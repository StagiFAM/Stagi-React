export interface JwtAuthResponse {
    refreshToken: string
    token: string
    tokenExpires: number
    user: {
        id: string
        name: string
        cpf: string
        document: string
        documentFile: string
        email: string
        role: 'user' | 'admin'
        race: string
        gender: string
        created_at: string
        updated_at: string
        deleted_at: null | string
        candidate: any
    }
}
