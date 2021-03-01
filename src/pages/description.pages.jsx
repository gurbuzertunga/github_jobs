import JobDescription from "../components/jobDescription";
import Sidebar from "../components/sidebar";

const Description = () => (
  <div class="flex">
    <Sidebar page="descriptionPage" />
    <JobDescription />
  </div>
);

export default Description;
