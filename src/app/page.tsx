import SimpleInput, { IconLeftInput, InputSkeleton, IconRightInput } from "@/component/inputs/simple-input/Inputs";
import { Textarea } from "@/component/inputs/textarea/textarea";
import { State } from "@/lib/types";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <>
    <IconRightInput 
    placeholder="Search..."
    state={State.error}
    isDisabled={false}
    requiredField={true}
    Icon={MagnifyingGlassIcon}
    />
    <IconLeftInput 
    placeholder="Search..."
    state={State.success}
    isDisabled={false}
    requiredField={true}
    Icon={MagnifyingGlassIcon}
    />
    <SimpleInput 
    placeholder="Search..."
    state={null}
    isDisabled={false}
    requiredField={true}
    />
    </>
  );
}
