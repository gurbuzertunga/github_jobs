import { withRouter } from "react-router";

function Job({data,handleClick}) {
  let {name,logo,position,location,date,description} = data
  date = date.split('T')[0];
  return (
    <div onClick={handleClick} className="flex p-4 mb-4 rounded bg-white shadow-2xl">
      <div className="w-2/12 mr-4">
        <img src={logo} alt="logo" className="rounded" />
      </div>
      <div className="flex flex-col text-blue-800 w-full">
        <p className="font-roboto text-xs font-bold">{name}</p>
        <p>{position}</p>
        <div className="flex justify-between items-end">
          <button className="border rounded border-blue-800 p-2 line">Full Time</button>
          <div className="flex justify-around">
            <p className='mr-2 font-bold'>{location}</p>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Job