'use client'

import { SecondaryButton } from "@/component/buttons/secondary";
import { PrimaryButton } from "@/component/buttons/primary";
import { ShareIcon } from "@heroicons/react/24/outline";
import { Input } from "@/component/inputs/input";

export default function Home() {
  return (
    <>
    <Input 
    placeholder="Input text..."
    label="First name"
    RightIcon={ShareIcon}
    requiredField={true}
    state={'success'}
    />
    <Input 
    placeholder="Input text..."
    label="Last name"
    RightIcon={ShareIcon}
    requiredField={true}
    state={'error'}
    />
    <Input 
    placeholder="Input text..."
    label="Last name"
    RightIcon={ShareIcon}
    requiredField={true}
    />
    </>
  );
}
