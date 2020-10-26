import * as React from "react";
import JobDetails from "../../components/resume/job-details";
import { Job } from "../../utils/useJobs";

interface ExperienceProps {
    data: Job[];
}

const Experience = ({data}: ExperienceProps) => {
    const jobs = data.filter(j => j.useInResume);

    return (
        <React.Fragment>
            {jobs.map(job => <JobDetails job={job} key={job.company} />)}
        </React.Fragment>
    )
};

export default Experience;
