import * as React from "react";
import {Text, View, StyleSheet} from "@react-pdf/renderer";

import {Job} from "../../utils/useJobs";

// const Date = styled.Text`
//     //float: right;
// `;

const styles = StyleSheet.create({
    date: {

    },
});

interface JobProps {
    job: Job;
}

const JobDetails = ({job}: JobProps) => (
    <View>
        <Text style={styles.date}>
            {job.startDate.getFullYear()} - {job.endDate ? job.endDate.getFullYear() : "Present"}
        </Text>
        <Text>{job.company}</Text>
        <Text>{job.title}</Text>
    </View>
);

export default JobDetails;
