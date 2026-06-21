'use client'

import { SecondaryButton } from "@/component/buttons/secondary";
import { PrimaryButton } from "@/component/buttons/primary";
import { ShareIcon } from "@heroicons/react/24/outline";
import { Input, InputSkeleton } from "@/component/inputs/input";
import { BaseButton } from "@/component/buttons/baseButton";
import { Textarea, TextareaSkeleton } from "@/component/inputs/textarea";

export default function Home() {
  return (
    <>
    <Input 
    placeholder="Input..."/>
    <InputSkeleton/>
    </>
  );
}
