import { PrimaryButton } from "@/shared/ui/buttons/primary/button";

export default function Home() {

  return (
    <>
    <PrimaryButton
    link={'/authorization/sign-up'}
    themeColor="blue">
      Authorization
    </PrimaryButton>
    </>
  );
}
