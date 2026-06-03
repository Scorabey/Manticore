import { Textarea } from "@/component/inputs/textarea/textarea";
import { State } from "@/lib/types";

export default function Home() {
  return (
    <>
    <Textarea 
    isDisabled={false} 
    placeholder="Placeholder" 
    state={null}/>
    </>
  );
}
