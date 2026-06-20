'use client'

import { SecondaryButton } from "@/component/buttons/secondary";
import { PrimaryButton } from "@/component/buttons/primary";
import { ShareIcon } from "@heroicons/react/24/outline";
import { Input } from "@/component/inputs/input";
import BaseButton from "@/component/buttons/baseButton/button";

export default function Home() {
  return (
    <>
    <BaseButton
    Icon={ShareIcon}
    />
    </>
  );
}
