import Job from "./job";
import {withRouter} from 'react-router-dom'
// import Pagination from "./pagination";
function JobList({ jobs ,match,history}) {
  jobs =
    jobs &&
    jobs.slice(0, 20).map((element, i) => {
      return element;
    });


    const handleClick = (e) =>{
      console.log(e.target);
      console.log(match);
      console.log(history);
      history.push(`description/${jobs.indexOf(e.target)}`);
    }
    

  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1 md:ml-8">
        {jobs && jobs.map((job, i) => <Job key={i} data={job} handleClick={handleClick}/>)}
      </div>
    </div>
  );
}


export default withRouter(JobList)