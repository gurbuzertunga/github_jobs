import JobList from "../components/jobList";
import SearchBar from "../components/SearchBar.component";
import Sidebar from '../components/sidebar'

const SearchPage = () => (
  <>
  <SearchBar/>
  <div className="container">
    <Sidebar page='searchPage'/>
    <JobList/>
  </div>
  </>
);

export default SearchPage;
