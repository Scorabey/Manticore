'use client'

import { SecondaryButton, SecondaryButtonSkeleton } from "@/component/buttons/secondary";
import { PrimaryButton, PrimaryButtonSkeleton } from "@/component/buttons/primary";
import { ShareIcon } from "@heroicons/react/24/outline";
import { Input, InputSkeleton } from "@/component/inputs/input";
import { BaseButton, BaseButtonSkeleton } from "@/component/buttons/baseButton";
import { Textarea, TextareaSkeleton } from "@/component/inputs/textarea";
import { CheckBox } from "@/component/checkboxes/checkbox";

export default function Home() {
  return (
    <>
    <CheckBox 
    content="Select"
    type="checkbox"/>
    </>
  );
}
