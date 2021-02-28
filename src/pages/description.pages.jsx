import React from "react";
import JobDescription from "../components/jobDescription";
import Sidebar from "../components/sidebar";

export default function Description() {
  return (
    <div className="container">
      <Sidebar />
      <JobDescription />
    </div>
  );
}
