import { authenticateUserService } from "@/entities/user/userService";
import { Suspense } from "react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const userId = await authenticateUserService()

    return (
        <Suspense>
          <h1>User id: {userId}</h1>
            {children}
        </Suspense>
    )
}