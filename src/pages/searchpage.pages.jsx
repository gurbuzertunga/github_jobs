import JobList from "../components/jobList";
import SearchBar from "../components/SearchBar.component";
import Sidebar from "../components/sidebar";

import Loader from "../components/loader";

const SearchPage = ({ jobs, filterJob }) => {
  console.log(jobs);
  return (
    <>
      <SearchBar filterJob={filterJob} />
      <div className="flex flex-col md:flex-row">
        <Sidebar page="searchPage" />
        {jobs.length ? <JobList jobs={jobs} /> : <Loader />}
      </div>
    </>
  );
};

export default SearchPage;
