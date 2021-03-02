import Job from "./job";
// import Pagination from "./pagination";

export default function JobList() {
  return (
    <div className='flex flex-col flex-1'>
      <div className="flex-1 md:ml-8">
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
      </div>
      {/* <Pagination/> */}
    </div>
  );
}
