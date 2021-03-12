import JobList from "../components/jobList";
import SearchBar from "../components/SearchBar.component";
import Sidebar from '../components/sidebar'

const SearchPage = ({jobs}) => {
  return (
  <>
  <SearchBar/>
  <div className="flex flex-col md:flex-row">
    <Sidebar page='searchPage'/>
    <JobList jobs={jobs} />
  </div>
  </>
  )
};

export default SearchPage;
