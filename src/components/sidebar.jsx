import { Link } from "react-router-dom";
import Input from "../ui-kits/Input";
import { BiWorld, IoReturnDownBackOutline } from "react-icons/all";

export default function Sidebar({ page, url }) {
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
            <input
              type="checkbox"
              name="Full time"
              id="full"
              className="pl-2 mr-2 w-4 h-4"
            />
            <label htmlFor="full">Full time</label>
          </div>
          <h3 className="text-lg text-gray-400 font-bold pb-2">Location</h3>
          <Input
            icon={<BiWorld />}
            placeholder="City,state zip code or country"
          />
          <div className="flex flex-col pl-2">
            <div className="py-2">
              <input
                className="mr-2 w-4 h-4"
                type="radio"
                value="london"
                name="country"
                id="london"
              />
              <label htmlFor="london">London</label>
            </div>
            <div className="py-2">
              <input
                className="mr-2 w-4 h-4"
                type="radio"
                value="amsterdam"
                name="country"
                id="amsterdam"
              />
              <label htmlFor="amsterdam">Amsterdam</label>
            </div>
            <div className="py-2">
              <input
                className="mr-2 w-4 h-4"
                type="radio"
                value="newyork"
                name="country"
                id="newyork"
              />
              <label htmlFor="newyork">New York</label>
            </div>
            <div className="py-2">
              <input
                className="mr-2 w-4 h-4"
                type="radio"
                value="berlin"
                name="country"
                id="berlin"
              />
              <label htmlFor="berlin">Berlin</label>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
