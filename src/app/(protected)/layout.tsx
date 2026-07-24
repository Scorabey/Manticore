import { authenticateUserService } from "@/entities/user/userService";
import { Suspense } from "react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    await authenticateUserService()

    return (
        <Suspense>
            {children}
        </Suspense>
    )
}