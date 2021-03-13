import JobList from "../components/jobList";
import SearchBar from "../components/SearchBar.component";
import Sidebar from "../components/sidebar";

import Loader from "../components/loader";

const SearchPage = ({ jobs }) => {
  return (
    <>
      <SearchBar />
      <div className="flex flex-col md:flex-row">
        <Sidebar page="searchPage" />
        {jobs ? <JobList jobs={jobs} /> : <Loader />}
      </div>
    </>
  );
};

export default SearchPage;
