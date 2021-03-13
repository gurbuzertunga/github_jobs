import Job from "./job";
import {withRouter} from 'react-router-dom';
// import Pagination from "./pagination";
function JobList({ jobs ,match,history, location}) {
  jobs =
    jobs &&
    jobs.slice(0, 20).map((element, i) => {
      return element;
    });


    const handleClick = (e,job) =>{
      history.push(`description/${e}`, job);
      console.log(history);
    }
    

  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1 md:ml-8">
        {jobs && jobs.map((job, i) => <Job key={i} pageNumber={i} data={job} handleClick={ () =>handleClick(i,job)}/>)}
      </div>
    </div>
  );
}


export default withRouter(JobList)