import * as React from "react";
import {Job} from "../../utils/useJobs";

interface JobProps {
    job: Job;
}

const JobDetails = ({job}: JobProps) => (
    <div style={{marginBottom: "1.5rem"}}>
        <span className="is-pulled-right">
            {new Date(job.startDate).getFullYear()} - {job.endDate ? new Date(job.endDate).getFullYear() : "Present"}
        </span>
        <span className="is-size-4">{job.company}</span>
        <br />
        <span className="is-size-6">{job.title}</span>
    </div>
);

export default JobDetails;
