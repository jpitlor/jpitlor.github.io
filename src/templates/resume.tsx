import * as React from "react";
import {View, Text, StyleSheet, Document, Page} from "@react-pdf/renderer";

// import Section from "../components/resume/section";
// import Experience from "../sections/resume/experience";
// import Projects from "../sections/resume/projects";
// import Education from "../sections/resume/education";

// Font.register({
//     family: "Jetbrains Mono",
//     src: "",
// });
//
// Font.register({
//     family: "Merriweather",
//     src: "",
// });
//
// Font.register({
//     family: "Rubik",
//     src: "",
// });

const styles = StyleSheet.create({
    page: {
        padding: "0.25in",
    },
    nameContainer: {

    },
    name: {

    },
    infoContainer: {

    },
    infoItem: {

    },
    icon: {

    },
});

const Resume = () => (
    <Document title="Jordan Pitlor Resume" author="Jordan Pitlor">
        <Page size="letter">
            <View style={styles.page}>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>Jordan Pitlor</Text>
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.infoItem}>
                        {/* <Image src="" style={styles.icon} />*/}
                        <Text>piticent123</Text>
                    </View>
                    <View style={styles.infoItem}>
                        {/* <Image src="" style={styles.icon} />*/}
                        <Text>jordan@pitlor.dev</Text>
                    </View>
                    <View style={styles.infoItem}>
                        {/* <Image src="" style={styles.icon} />*/}
                        <Text>(216) 403-8126</Text>
                    </View>
                </View>
                {/* <Section title="Experience">*/}
                {/*    <Experience />*/}
                {/* </Section>*/}
                {/* <Section title="Projects">*/}
                {/*    <Projects />*/}
                {/* </Section>*/}
                {/* <Section title="Education">*/}
                {/*    <Education />*/}
                {/* </Section>*/}
            </View>
        </Page>
    </Document>
);

export default Resume;
