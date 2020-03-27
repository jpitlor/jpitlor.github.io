import * as React from "react";
import {Text, View} from "@react-pdf/renderer";

import {Job} from "../../utils/useJobs";

interface JobProps {
    job: Job;
}

const JobDetails = ({job}: JobProps) => (
    <View>
        <Text>
            {new Date(job.startDate).getFullYear()} - {job.endDate ? new Date(job.endDate).getFullYear() : "Present"}
        </Text>
        <Text>{job.company}</Text>
        <Text>{job.title}</Text>
    </View>
);

export default JobDetails;
