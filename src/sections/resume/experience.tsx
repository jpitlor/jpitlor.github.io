import * as React from "react";
import {JobGroup} from "../../utils/useJobs";
import JobDetails from "../../components/resume/job-details";

interface ExperienceProps {
    data: JobGroup[];
}

const Experience = ({data}: ExperienceProps) => {
    const jobs = data.flatMap(g => g[1]).filter(j => j.useInResume);

    return (
        <React.Fragment>
            {jobs.map(job => <JobDetails job={job} key={job.company} />)}
        </React.Fragment>
    )
};

export default Experience;
