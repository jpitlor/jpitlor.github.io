import * as React from "react";
import {StyleSheet, Text, View} from "@react-pdf/renderer";

interface ResumeSectionProps {
    title: string;
    children: React.ReactNode;
}

const styles = StyleSheet.create({
    title: {
        padding: "0 4mm",
        fontFamily: "Merriweather",
        fontSize: "16px",
    },
    content: {
        fontFamily: "Rubik",
        fontSize: "12px",
    },
    titleContainer: {
        paddingBottom: "4mm 0 2mm",
        position: "relative",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    line: {
        flex: 1,
        height: 0,
        borderBottom: "1px solid black",
    },
});

const Section = ({title, children}: ResumeSectionProps) => {
    return (
        <React.Fragment>
            <View style={styles.titleContainer}>
                <View style={styles.line} />
                <Text style={styles.title}>{title}</Text>
                <View style={styles.line} />
            </View>
            <View style={styles.content}>{children}</View>
        </React.Fragment>
    );
};

export default Section;
