import { PrimaryButton } from "@/component/buttons/primary/button";

export default function Home() {

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
