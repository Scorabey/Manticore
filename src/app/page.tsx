import { PrimaryButton } from "@/shared/ui/buttons/primary/button";

export default async function Home() {

  return (
    <>
    <PrimaryButton
    link={'/authorization'}
    themeColor="blue">
      Sign In
    </PrimaryButton>
    </>
  );
}
