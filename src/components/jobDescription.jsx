import React from "react";
import { AiOutlineClockCircle, BiWorld } from "react-icons/all";
// import Job from "../components/job";

export default function JobDescription({data}) {
  let {name,logo,position,location,date, description} = data
  date = date.split('T')[0];
  return (
    <div className="flex-1 md:ml-8 bg-white p-4 rounded">
      <div className="flex justify-between items-center">
        <h1 className="text-indigo-900 mr-4  text-xl font-bold">
          {position}
        </h1>
        <div className='flex items-center ml-2 text-gray-500'>
        <AiOutlineClockCircle />
        <p className="ml-2 underline">{date}</p>
      </div>
      </div>
      
      <div>
        <img
          src={logo}
          alt="logo"
          className="rounded w-24"
        />
        <div>
          <h2 className="font-roboto text-sm font-bold">{name}</h2>
          <div className="flex py-4">
          <BiWorld />
          <p className="mx-4 align-top">{location}</p>
          </div>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{__html: description}}></div>
    </div>
  );
}
