import JobDescription from "../components/jobDescription";
import Sidebar from "../components/sidebar";
import { withRouter} from 'react-router-dom';


const Description = ({history}) => {
  const {date, description, location, logo, name, position, url} = history.location.state;
  const data = {date, description, location, logo, name, position, url};
  return(
  <div className="md:flex">
    <Sidebar page="descriptionPage" url={data.url}/>
    <JobDescription data={data}/>
  </div>
  )
};
export default withRouter(Description)
