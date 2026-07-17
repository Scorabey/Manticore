import { PrimaryButton } from "@/shared/ui/buttons/primary/button";
import { cookies } from "next/headers";

export default async function Home() {

  const cookieStore = await cookies()

  const token = cookieStore.get('session')?.value

  return (
    <>
    <h1>Rule: {token ? 'User.' : 'Guest'}</h1>
    <PrimaryButton
    link={'/authorization'}
    themeColor="blue">
      Sign In
    </PrimaryButton>
    </>
  );
}
