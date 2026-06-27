'use client'

import { SecondaryButton, SecondaryButtonSkeleton } from "@/component/buttons/secondary";
import { PrimaryButton, PrimaryButtonSkeleton } from "@/component/buttons/primary";
import { ShareIcon } from "@heroicons/react/24/outline";
import { Input, InputSkeleton } from "@/component/inputs/input";
import { BaseButton, BaseButtonSkeleton } from "@/component/buttons/baseButton";
import { Textarea, TextareaSkeleton } from "@/component/inputs/textarea";
import { CheckBox } from "@/component/checkboxes/checkbox";
import { useState } from "react";

export default function Home() {
  const [checked, setChecked] = useState(false)

  return (
    <>
    <CheckBox 
    content="Select"
    type="checkbox"
    name="select"
    checked={checked}
    onChange={(e) => setChecked(e.target.checked)}/>
    <CheckBox
    content="Dark"
    type="radio"
    name="theme"
    checked={checked}
    onChange={(e) => setChecked(e.target.checked)}/>
    <CheckBox 
    content="Light"
    type="radio"
    name="theme"
    checked={checked}
    onChange={(e) => setChecked(e.target.checked)}/>
    </>
  );
}
