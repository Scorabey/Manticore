import { SecondaryButton } from "@/component/buttons/secondary/button";
import { PrimaryButton } from "@/component/buttons/primary/button";

export default function Home() {
  return (
    <>
    <SecondaryButton
    content="Secondary Button!"
    themeColor={'blue'}
    />
    <PrimaryButton 
    content="Primary Button!"
    themeColor={'red'}
    />  
    </>
  );
}
