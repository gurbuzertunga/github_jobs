import { BsBriefcase } from "react-icons/all";
import Input from "../../ui-kits/Input";

export default function SearchBar() {
  return (
    <div className="searchbar-img w-full relative h-48 flex justify-center items-center">
      <Input isButton icon={<BsBriefcase/>}/>
    </div>
  );
}
