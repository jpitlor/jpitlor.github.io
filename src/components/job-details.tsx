import * as React from "react";

import {TransformedJob} from "../utils/types";

interface JobDetailsProps {
    job: TransformedJob | null;
}

const JobDetails = ({job}: JobDetailsProps) => (
    <div className="panel is-grey column">
        {job ? (
            <span />
        ) : (
            <em className="has-text-grey is-size-4">Select a job to see more details</em>
        )}
    </div>
);

export default JobDetails;
