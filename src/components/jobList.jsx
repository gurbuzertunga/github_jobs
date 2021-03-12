import Job from "./job";
// import Pagination from "./pagination";
export default function JobList({ jobs }) {

  const handleJob = (job2,i) => {
    jobs && jobs.map((job, i) => {
    const key = i;
    const job = job;
  });

  };
  return (
    <div className='flex flex-col flex-1'>
      <div className="flex-1 md:ml-8">
            <Job key={handleJob(i)} data={handleJob(job2)} />
      </div>
      {/* <Pagination/> */}
    </div>
  )
}