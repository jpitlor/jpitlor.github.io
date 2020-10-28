import * as React from "react";
import {View, Text, StyleSheet} from "@react-pdf/renderer";

import {GithubDataDataUserPinnedItemsNodes} from "../../utils/schema";
import useReadme from "../../utils/useReadme";

const styles = StyleSheet.create({
    container: {
        marginBottom: "3mm",
        position: "relative",
    },
    label: {
        fontWeight: "bold",
    },
    description: {
        marginTop: "1mm",
        width: "100%",
    },
    shortDescription: {
        color: "#666666",
    },
});

interface ProjectProps {
    project: GithubDataDataUserPinnedItemsNodes;
}

const Project = ({project}: ProjectProps) => {
    const {title, longDescription} = useReadme(project.object.text);

    function unmarked(md: string): string {
        return md
            .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
            .replace(/\n/g, " ")
            .replace(/[ ][ ]/g, " ");
    }

    return (
        <View style={styles.container}>
            <Text>
                <Text style={styles.label}>{title}</Text>
                &nbsp;
                <Text style={styles.shortDescription}>{project.description}</Text>
            </Text>
            <Text style={styles.description}>
                {unmarked(longDescription)}
            </Text>
        </View>
    );
};

export default Project;
