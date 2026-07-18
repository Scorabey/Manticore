import { getSession } from "@/entities/session/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import React from "react";

export default async function Layout({
    children
}: {
    children: React.ReactNode
}) {
    await connection()

    const token = (await cookies()).get('session')?.value

    if(!token) {
        redirect('/authorization')
    }

    const session = await getSession(token)

    if(!session) {
        redirect('/logout')
    }

    return children
}