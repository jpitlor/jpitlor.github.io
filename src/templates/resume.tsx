import * as React from "react";
import {Document, Font, StyleSheet, Text, View, Image, Page} from "@react-pdf/renderer";

import Section from "../components/resume/section";
import Experience from "../sections/resume/experience";
import Projects from "../sections/resume/projects";
import Education from "../sections/resume/education";
import {JobGroup} from "../utils/useJobs";
import {ContentfulSchool, GithubDataDataUserPinnedItemsNodes} from "../utils/schema";

Font.register({
    family: "Ubuntu Mono",
    src: "/UbuntuMono-Regular.ttf",
});

Font.register({
    family: "Merriweather",
    src: "/Merriweather-Regular.ttf",
});

Font.register({
    family: "Rubik",
    fonts: [
        {src: "/Rubik-Regular.ttf"},
        {src: "/Rubik-Italic.ttf", fontStyle: "italic"},
        {src: "/Rubik-Bold.ttf", fontWeight: 700},
    ],
});

const styles = StyleSheet.create({
    page: {
        padding: "5mm 10mm",
    },
    iconContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "20px",
        height: "20px",
        marginRight: "5px",
    },
    faIcon: {
        width: "16px",
        height: "auto",
    },
    infoText: {
        height: "20px",
        fontSize: "16px",
        fontFamily: "Rubik",
    },
    title: {
        fontFamily: "Ubuntu Mono",
        fontSize: "36px",
        width: "100%",
        textAlign: "center",
    },
    infoContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "5mm 0 2mm",
        width: "100%",
        height: "20px",
    },
    infoItem: {
        display: "flex",
        flexDirection: "row",
    },
});

interface ResumeProps {
    jobs: JobGroup[];
    projects: GithubDataDataUserPinnedItemsNodes[];
    schools: ContentfulSchool[];
}

const Resume = ({jobs, projects, schools}: ResumeProps) => (
    <Document title="Jordan Pitlor Resume" author="Jordan Pitlor">
        <Page size="letter" style={styles.page}>
            <Text style={styles.title}>Jordan Pitlor</Text>
            <View style={styles.infoContainer}>
                <View style={styles.infoItem}>
                    <View style={styles.iconContainer}>
                        <Image style={styles.faIcon} src="/github.png" />
                    </View>
                    <Text style={styles.infoText}>
                        piticent123
                    </Text>
                </View>
                <View style={styles.infoItem}>
                    <View style={styles.iconContainer}>
                        <Image style={styles.faIcon} src="/envelope.png" />
                    </View>
                    <Text style={styles.infoText}>
                        jordan@pitlor.dev
                    </Text>
                </View>
                <View style={styles.infoItem}>
                    <View style={styles.iconContainer}>
                        <Image style={styles.faIcon} src="/phone-alt.png" />
                    </View>
                    <Text style={styles.infoText}>
                        (216) 403-8126
                    </Text>
                </View>
            </View>
            <Section title="Education">
                <Education data={schools} />
            </Section>
            <Section title="Experience">
                <Experience data={jobs} />
            </Section>
            <Section title="Projects">
                <Projects data={projects} />
            </Section>
        </Page>
    </Document>
);

export default Resume;
