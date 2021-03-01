import React from "react";
import { AiOutlineClockCircle, BiWorld } from "react-icons/all";
import Job from "../components/job";

export default function JobDescription() {
  return (
    <div className="flex-1 md:ml-8 border-gray-800 border">
      <div className="flex items-center">
        <h1 className="text-indigo-900 mr-4  text-xl font-bold">
          Front-End Software Engineer
        </h1>
        <span className="border border-gray-800 p-1 text-sm">Full Time</span>
      </div>
      <div className='flex items-center ml-2 text-gray-500'>
        <AiOutlineClockCircle />
        <p className="ml-2">5 days ago</p>
      </div>
      <div>
        <img
          src="https://remoteok.io/assets/jobs/9f761e0e3fb1bf37b9def0d38fc3e1811614464429.png"
          alt="logo"
          className="rounded w-12"
        />
        <div>
          <h2 className="font-roboto text-xs font-bold">Volt Agency LLC</h2>
          <BiWorld />
          <p>New York</p>
        </div>
      </div>
      <h3>Humanizing Digital Experiences@ </h3>
    </div>
  );
}
