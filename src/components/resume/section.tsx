import * as React from "react";
import {StyleSheet, Text, View} from "@react-pdf/renderer";

interface ResumeSectionProps {
    title: string;
    children: React.ReactNode;
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        padding: "0.75rem",
    },
    container: {
        marginBottom: "3rem",
    },
});

const Section = ({title, children}: ResumeSectionProps) => {
    return (
        <React.Fragment>
            <Text style={styles.header}>{title}</Text>
            <View style={styles.container}>{children}</View>
        </React.Fragment>
    );
};

export default Section;
