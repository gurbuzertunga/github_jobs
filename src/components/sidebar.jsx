import { Link } from "react-router-dom";
import Input from "../ui-kits/Input";
import { GrStackOverflow, IoReturnDownBackOutline } from "react-icons/all";

export default function Sidebar({ page, url,showAllJobs, showJobPath }) {
  return (
    <>
      {page === "descriptionPage" && (
        <aside className="md:w-1/3 mb-4">
          <div className="flex pb-4 items-center">
            <IoReturnDownBackOutline />
            <Link to="/" className="mx-4">Back to search page</Link>
          </div>
          <h3 className="my-4 text-xl font-bold text-blue-800">How to apply</h3>
          <p className="">
            To apply to this position click on this <a href={url} target="blank" className="font-bold text-blue-800">here</a>
          </p>
        </aside>
      )}
      {page === "searchPage" && (
        <aside className="md:w-1/3 mb-4">
          <div className="pl-2 mb-4">
           <p onClick={showAllJobs} className='cursor-pointer font-extrabold hover:text-blue-500'>See All Job postings</p>
          </div>
          <h3 className="text-lg text-gray-700 font-bold pb-2">Path</h3>
          <div className="flex flex-col pl-2">
            <div className="py-2">
             <p className="cursor-pointer text-blue-600 font-medium" onClick={() => showJobPath('Full Stack Developer')}>Full Stack Developer</p>
            </div>
            <div className="py-2">
              <p className="cursor-pointer text-blue-600 font-medium" onClick={() => showJobPath('Front End Developer')}>Front End Developer</p>
            </div>
            <div className="py-2">
             <p tabIndex="0" className="cursor-pointer text-blue-600 font-medium"  onClick={() => showJobPath('Back End Developer')}>Back End Developer</p>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
