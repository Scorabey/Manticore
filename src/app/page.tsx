import { Dropdown } from "../component/dropdown/dropdown";

export default function Home() {

  const options = [
    {label: 'Apple', value: 'apple'},
    {label: 'Orange', value: 'orange'},
    {label: 'Wotermelon', value: 'wotermelon'},
  ]

  return (
    <>
    <Dropdown 
    option={options}
    setContent="Select fruits..."
    label="Fruits"
    multy={false}/>
    </>
  );
}
