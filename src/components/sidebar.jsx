import { Link } from "react-router-dom";
import { IoReturnDownBackOutline } from "react-icons/all";

export default function Sidebar() {
  return (
    <div className="bg-red-400 px-12 w-1/4 h-screen">
      <div className='flex pb-4'>
        <IoReturnDownBackOutline />
        <Link to="/">Back to search page</Link>
      </div>
      <h3>How to apply</h3>
      <p className=''>
        Please email a copy of your resume and online portfolio to
        shit@shitty.com
      </p>
    </div>
  );
}
