import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const response = NextResponse.redirect(new URL('/authorization', request.url))
    const token = request.cookies.get("session")?.value

    if(!token) return response

    return NextResponse.next()
}

export const config = {
    matcher: ['/profile/:path*', '/dashboard/:path*']
}