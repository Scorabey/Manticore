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
import { Control } from "@/component/dropdown/control";
import { Options } from "@/component/dropdown/options";
import { OptionValue } from "@/lib/types";
import { Dropdown, ControlSkeleton } from "@/component/dropdown";

export default function Home() {

  const option = [
    {label: 'Apple', value: 'apple'},
    {label: 'Orange', value: 'orange'},
    {label: 'Mango', value: 'mango'},
    {label: 'Banana', value: 'banana'},
    {label: 'Watermelon', value: 'watermelon'},
  ]

  return (
    <>
    <Dropdown 
    setContent="Select fruit"
    option={option}
    label="Dropdown"
    multy={false}/>
    <ControlSkeleton />
    </>
  );
}
