import * as React from "react";
import JobDetails from "../components/job-details";
import { Job } from "../../utils/useJobs";

interface ExperienceProps {
  data: Job[];
}

const Experience = ({ data }: ExperienceProps) => {
  return (
    <React.Fragment>
      {data.map((job) => (
        <JobDetails job={job} key={job.company} />
      ))}
    </React.Fragment>
  );
};

export default Experience;
