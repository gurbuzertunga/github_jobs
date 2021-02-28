import { BsBriefcase } from "react-icons/all";
import Input from "../ui-kits/Input";

export default function SearchBar() {
  return (
    <div className="searchbar-img w-full relative h-36 px-24 mb-12 flex justify-center items-center rounded">
      <Input isButton icon={<BsBriefcase/>} placeholder='Title,companies,expertise or benefits'/>
    </div>
  );
}
