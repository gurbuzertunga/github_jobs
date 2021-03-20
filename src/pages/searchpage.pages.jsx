import JobList from "../components/jobList";
import SearchBar from "../components/SearchBar.component";
import Sidebar from "../components/sidebar";

import Loader from "../components/loader";

const SearchPage = ({ jobs, filterJob,showAllJobs, showJobPath, path }) => {
  
  return (
    <>
      <SearchBar filterJob={filterJob} />
      <div className="flex flex-col md:flex-row">
        <Sidebar page="searchPage" showAllJobs={showAllJobs} showJobPath={showJobPath} />
        {jobs.length ? <JobList jobs={jobs} path={path}/> : <Loader />}
      </div>
    </>
  );
};

export default SearchPage;
