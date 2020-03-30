import * as React from "react";
import {View, Text, StyleSheet} from "@react-pdf/renderer";

import {ContentfulSchool} from "../../utils/schema";

const styles = StyleSheet.create({
    container: {
        position: "relative",
    },
    date: {
        position: "absolute",
        right: 0,
        color: "#888888",
    },
    label: {
        fontWeight: "bold",
    },
    shortDescription: {
        fontStyle: "italic",
    },
});

interface SchoolProps {
    school: ContentfulSchool;
}

const School = ({school}: SchoolProps) => (
    <View style={styles.container}>
        <Text style={styles.date}>
            {new Date(school.startDate).getFullYear()}
            &nbsp;-&nbsp;
            {new Date(school.endDate).getFullYear()}
        </Text>
        <Text>
            <Text style={styles.label}>{school.name}</Text>
            &nbsp;
            <Text style={styles.shortDescription}>(B.S. {school.major.join(", ")}, {school.city} Campus)</Text>
        </Text>
        <Text>
            - Minors: {school.minor.join(", ")}
        </Text>
        <Text>
            - Concentrations: {school.concentration.join(", ")}
        </Text>
    </View>
);

export default School;
