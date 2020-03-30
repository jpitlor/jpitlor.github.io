import * as React from "react";
import {Text, View, StyleSheet} from "@react-pdf/renderer";
import {BLOCKS} from "@contentful/rich-text-types";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";

import {Job} from "../../utils/useJobs";

const styles = StyleSheet.create({
    container: {
        position: "relative",
        marginBottom: "3mm",
    },
    date: {
        position: "absolute",
        right: 0,
        color: "#888888",
    },
    label: {
        fontWeight: "bold",
    },
    description: {
        marginLeft: "1mm",
    },
    shortDescription: {
        fontStyle: "italic",
    },
});

interface JobProps {
    job: Job;
}

const JobDetails = ({job}: JobProps) => (
    <View style={styles.container}>
        <Text style={styles.date}>
            {job.startDate.getFullYear()} - {job.endDate ? job.endDate.getFullYear() : "Present"}
        </Text>
        <Text>
            <Text style={styles.label}>{job.company}</Text>
            &nbsp;
            <Text style={styles.shortDescription}>({job.title} - {job.city}, {job.state})</Text>
        </Text>
        <Text style={styles.description}>
            {documentToReactComponents(job.description?.json, {
                renderNode: {
                    [BLOCKS.LIST_ITEM]: (node, children) => children,
                    [BLOCKS.OL_LIST]: (node, children) => children,
                    [BLOCKS.UL_LIST]: (node, children) => children,
                    [BLOCKS.PARAGRAPH]: (node, children) => children,
                },
                renderText: t => `- ${t}\n`,
            })}
        </Text>
    </View>
);

export default JobDetails;
