import { BsBriefcase } from "react-icons/all";
import Input from "../ui-kits/Input";

export default function SearchBar() {
  return (
    <div className="searchbar-img w-full relative h-24 flex justify-center items-center rounded">
      <Input isButton icon={<BsBriefcase/>} placeholder='Title,companies,expertise or benefits'/>
    </div>
  );
}
