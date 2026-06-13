import { SecondaryButton } from "@/component/buttons/secondary/button";
import { PrimaryButton } from "@/component/buttons/primary/button";
import { ShareIcon } from "@heroicons/react/24/outline";
import { IconRightInput, IconLeftInput, SimpleInput } from "@/component/inputs/simple-input/Inputs";

export default function Home() {
  return (
    <>
    <SecondaryButton
    content="Secondary Button!"
    themeColor={'red'}
    Icon={ShareIcon}
    />
    </>
  );
}
