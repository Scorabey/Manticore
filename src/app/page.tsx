'use client'

import { SecondaryButton, SecondaryButtonSkeleton } from "@/component/buttons/secondary";
import { PrimaryButton, PrimaryButtonSkeleton } from "@/component/buttons/primary";
import { ShareIcon } from "@heroicons/react/24/outline";
import { Input, InputSkeleton } from "@/component/inputs/input";
import { BaseButton, BaseButtonSkeleton } from "@/component/buttons/baseButton";
import { Textarea, TextareaSkeleton } from "@/component/inputs/textarea";

export default function Home() {
  return (
    <>
    <SecondaryButtonSkeleton />
    <SecondaryButton 
    content="Button"/>
    <PrimaryButtonSkeleton />
    <PrimaryButton 
    content="Button"/>
    </>
  );
}
