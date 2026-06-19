'use client'

import { SecondaryButton } from "@/component/buttons/secondary/button";
import { PrimaryButton } from "@/component/buttons/primary/button";
import { ShareIcon } from "@heroicons/react/24/outline";
import { Input } from "@/component/inputs/input/input";

export default function Home() {
  return (
    <>
    <Input 
    placeholder="Input text..."
    label="First name"
    RightIcon={ShareIcon}
    />
    <Input 
    placeholder="Input text..."
    label="Last name"
    RightIcon={ShareIcon}
    />
    </>
  );
}
