import * as React from "react";
import {StyleSheet, Text, View} from "@react-pdf/renderer";

interface ResumeSectionProps {
    title: string;
    children: React.ReactNode;
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "Merriweather",
        fontSize: "16px",
        width: "100%",
        textAlign: "center",
        padding: "6mm 0 3mm",
    },
    content: {
        marginBottom: "2rem",
        fontFamily: "Rubik",
        fontSize: "12px",
    },
});

const Section = ({title, children}: ResumeSectionProps) => {
    return (
        <React.Fragment>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.content}>{children}</View>
        </React.Fragment>
    );
};

export default Section;
