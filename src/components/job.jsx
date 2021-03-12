import React, { useState } from 'react';

export default function Job({data}) {
  console.log(data)
  return (
    <div className="flex p-4 mb-4 rounded bg-white shadow-2xl">
      <div className="w-2/12 mr-4">
        <img src="https://remoteok.io/assets/jobs/9f761e0e3fb1bf37b9def0d38fc3e1811614464429.png" alt="logo" className="rounded" />
      </div>
      <div className="flex flex-col text-blue-800 w-full">
        <p className="font-roboto text-xs font-bold">Volt Agency LLC</p>
        <p>Senior Backend Engineer</p>
        <div className="flex justify-between items-end">
          <button className="border rounded border-blue-800 p-2 line">Full Time</button>
          <div className="flex justify-around">
            <p>New York</p>
            <p>5 days ago</p>
          </div>
        </div>
      </div>
    </div>
  )
}
