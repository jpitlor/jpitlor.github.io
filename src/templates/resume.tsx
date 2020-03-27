import * as React from "react";
import {View, Text, Document, Page} from "@react-pdf/renderer";
// @ts-ignore
import styled from "@react-pdf/styled-components";

import Section from "../components/resume/section";
import Experience from "../sections/resume/experience";
import Projects from "../sections/resume/projects";
import Education from "../sections/resume/education";
import {JobGroup} from "../utils/useJobs";
import {ContentfulSchool, GithubDataDataUserPinnedItemsNodes} from "../utils/schema";

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

const FontAwesomeIcon = styled.Image`
    width: 25px;
    height: 25px;
`;

interface ResumeProps {
    jobs: JobGroup[];
    projects: GithubDataDataUserPinnedItemsNodes[];
    schools: ContentfulSchool[];
}

const Resume = ({jobs, projects, schools}: ResumeProps) => (
    <Document title="Jordan Pitlor Resume" author="Jordan Pitlor">
        <Page size="letter">
            <View>
                <View>
                    <Text>Jordan Pitlor</Text>
                </View>
                <View>
                    <View>
                        <FontAwesomeIcon src="/github.png" />
                        <Text>piticent123</Text>
                    </View>
                    <View>
                        <FontAwesomeIcon src="/envelope.png" />
                        <Text>jordan@pitlor.dev</Text>
                    </View>
                    <View>
                        <FontAwesomeIcon src="/phone-alt.png" />
                        <Text>(216) 403-8126</Text>
                    </View>
                </View>
                <Section title="Experience">
                    <Experience data={jobs} />
                </Section>
                <Section title="Projects">
                    <Projects data={projects} />
                </Section>
                <Section title="Education">
                    <Education data={schools} />
                </Section>
            </View>
        </Page>
    </Document>
);

export default Resume;
