import * as React from "react";
import {Document, Font} from "@react-pdf/renderer";
// @ts-ignore
import styled from "@react-pdf/styled-components";

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

const PaddedPage = styled.Page`
    padding: 5mm 10mm;
`;

const IconContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-right: 5px;
`;

const FontAwesomeIcon = styled.Image`
    width: 16px;
    height: auto;
`;

const InfoText = styled.Text`
    //line-height: 20px;
    //font-size: 16px;
    //height: 20px;
    //width: 1in;
    border: 1px solid blue;
`

const Title = styled.Text`
    font-family: "Ubuntu Mono";
    font-size: 36px;
    width: 100%;
    text-align: center;
`;

const InfoContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding-top: 2mm;
    width: 100%;
    height: 20px;
`;

const InfoItem = styled.View`
    display: flex;
    flex-direction: row;
`;

interface ResumeProps {
    jobs: JobGroup[];
    projects: GithubDataDataUserPinnedItemsNodes[];
    schools: ContentfulSchool[];
}

const Resume = ({jobs, projects, schools}: ResumeProps) => (
    <Document title="Jordan Pitlor Resume" author="Jordan Pitlor">
        <PaddedPage size="letter">
            <Title>Jordan Pitlor</Title>
            <InfoContainer>
                <InfoItem>
                    <IconContainer>
                        <FontAwesomeIcon src="/github.png" />
                    </IconContainer>
                    <InfoText>piticent123</InfoText>
                </InfoItem>
                <InfoItem>
                    <IconContainer>
                        <FontAwesomeIcon src="/envelope.png" />
                    </IconContainer>
                    <InfoText>jordan@pitlor.dev</InfoText>
                </InfoItem>
                <InfoItem>
                    <IconContainer>
                        <FontAwesomeIcon src="/phone-alt.png" />
                    </IconContainer>
                    <InfoText>(216) 403-8126</InfoText>
                </InfoItem>
            </InfoContainer>
            <Section title="Experience">
                <Experience data={jobs} />
            </Section>
            <Section title="Projects">
                <Projects data={projects} />
            </Section>
            <Section title="Education">
                <Education data={schools} />
            </Section>
        </PaddedPage>
    </Document>
);

export default Resume;
