import * as React from "react";
import {StyleSheet, Text, View} from "@react-pdf/renderer";

import {Job} from "../../utils/useJobs";

interface JobProps {
    job: Job;
}

const styles = StyleSheet.create({
    container: {
        marginBottom: "1.5rem",
    },
    date: {

    },
    company: {

    },
    title: {

    },
});

const JobDetails = ({job}: JobProps) => (
    <View style={styles.container}>
        <Text style={styles.date}>
            {new Date(job.startDate).getFullYear()} - {job.endDate ? new Date(job.endDate).getFullYear() : "Present"}
        </Text>
        <Text style={styles.company}>{job.company}</Text>
        <Text style={styles.title}>{job.title}</Text>
    </View>
);

export default JobDetails;
