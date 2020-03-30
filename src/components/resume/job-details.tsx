import * as React from "react";
import {Text, View, StyleSheet} from "@react-pdf/renderer";
import {BLOCKS} from "@contentful/rich-text-types";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";

import {Job} from "../../utils/useJobs";
import UL from "./UL";
import LI from "./LI";

const styles = StyleSheet.create({
    container: {
        position: "relative",
        marginBottom: "3mm",
    },
    date: {
        position: "absolute",
        right: 0,
        color: "#666666",
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
        <View style={styles.description}>
            {documentToReactComponents(job.description?.json, {
                renderNode: {
                    [BLOCKS.LIST_ITEM]: function li(node, children): React.ReactNode {
                        return <LI>{children}</LI>;
                    },
                    [BLOCKS.OL_LIST]: function ol(node, children) {
                        return <UL>{children}</UL>;
                    },
                    [BLOCKS.UL_LIST]: function ul(node, children): React.ReactNode {
                        return <UL>{children}</UL>;
                    },
                    [BLOCKS.PARAGRAPH]: function p(node, children) {
                        return <Text>{children}</Text>
                    },
                },
            })}
        </View>
    </View>
);

export default JobDetails;
