import * as React from "react";
import {useJobs} from "../../utils/useJobs";
import JobDetails from "../../components/resume/job-details";

const Experience = () => {
    const jobs = useJobs().flatMap(g => g[1]).filter(j => j.useInResume);

    return (
        <React.Fragment>
            {jobs.map(job => <JobDetails job={job} key={job.company} />)}
        </React.Fragment>
    )
};

export default Experience;
