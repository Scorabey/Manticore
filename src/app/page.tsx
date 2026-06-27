'use client'

import { SecondaryButton, SecondaryButtonSkeleton } from "@/component/buttons/secondary";
import { PrimaryButton, PrimaryButtonSkeleton } from "@/component/buttons/primary";
import { ShareIcon } from "@heroicons/react/24/outline";
import { Input, InputSkeleton } from "@/component/inputs/input";
import { BaseButton, BaseButtonSkeleton } from "@/component/buttons/baseButton";
import { Textarea, TextareaSkeleton } from "@/component/inputs/textarea";
import { CheckBox } from "@/component/checkboxes/checkbox";
import { useState } from "react";
import { Switcher } from "@/component/checkboxes/switcher/switcher";

export default function Home() {
  const [checked, setChecked] = useState(true)

  const content = checked ? 'on' : 'off'

  return (
    <>
    <Switcher 
    content={content}
    name="switcher"
    checked={checked}
    onChange={(e) => setChecked(e.target.checked)}/>
    </>
  );
}
