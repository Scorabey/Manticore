import { jwtVerify, SignJWT, JWTPayload } from "jose";

export interface CustomJWTPayload extends JWTPayload {
    userId: number
}

const secret = new TextEncoder().encode(process.env.JWT_SECRET!)

export async function createJWT(userId: number, expiresInDays: number) {
    return await new SignJWT({
        userId
    })
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime(`${expiresInDays}d`)
        .sign(secret)
}

export async function verifyJWT(token: string): Promise<CustomJWTPayload | null> {
    try {
        const { payload } = await jwtVerify<CustomJWTPayload>(token, secret)

        return payload as { userId: number, iat: number, exp: number }
    } catch(error) {
        console.error(`Ошибка сервера`)

        return null
    }
}