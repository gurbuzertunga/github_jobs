import React from "react";
import { AiOutlineClockCircle, BiWorld } from "react-icons/all";
// import Job from "../components/job";

export default function JobDescription({data}) {


  function createMarkup(data) {
    return {__html: data.description};
  }


  return (
    <div className="flex-1 md:ml-8 border-gray-800 border">
      <div className="flex items-center">
        <h1 className="text-indigo-900 mr-4  text-xl font-bold">
          {data.position}
        </h1>
        
      </div>
      <div className='flex items-center ml-2 text-gray-500'>
        <AiOutlineClockCircle />
        <p className="ml-2">{data.date}</p>
      </div>
      <div>
        <img
          src={data.logo}
          alt="logo"
          className="rounded w-12"
        />
        <div>
          <h2 className="font-roboto text-xs font-bold">{data.name}</h2>
          <BiWorld />
          <p>{data.location}</p>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{__html: data.description}}></div>
    </div>
  );
}
