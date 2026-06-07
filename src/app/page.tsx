import { LabelInput } from "@/component/inputs/label-input/labelInput";
import { IconLeftInput, InputSkeleton } from "@/component/inputs/simple-input/Inputs";
import { Textarea } from "@/component/inputs/textarea/textarea";
import { State } from "@/lib/types";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <>
    <LabelInput 
    placeholder="Tap and fill..."
    />
    </>
  );
}
