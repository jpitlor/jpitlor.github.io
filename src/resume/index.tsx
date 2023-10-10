import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import fs from "fs";
import path from "path";
import * as React from "react";

import Section from "./components/section";
import Education from "./sections/education";
import Experience from "./sections/experience";
// import Projects from "./sections/projects";
import { Job } from "../utils/useJobs";

function readImage(file: string): any {
  return {
    data: fs.readFileSync(path.join(__dirname, "..", "..", "static", file)),
    format: "png",
  };
}

Font.register({
  family: "Ubuntu Mono",
  src: path.join(__dirname, "..", "..", "static", "UbuntuMono-Regular.ttf"),
});

Font.register({
  family: "Merriweather",
  src: path.join(__dirname, "..", "..", "static", "Merriweather-Regular.ttf"),
});

Font.register({
  family: "Rubik",
  fonts: [
    { src: path.join(__dirname, "..", "..", "static", "Rubik-Regular.ttf") },
    {
      src: path.join(__dirname, "..", "..", "static", "Rubik-Italic.ttf"),
      fontStyle: "italic",
    },
    {
      src: path.join(__dirname, "..", "..", "static", "Rubik-Bold.ttf"),
      fontWeight: 700,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: "10mm",
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
  jobs: Job[];
  projects: Queries.GithubDataDataUserPinnedItemsNodes[];
  schools: Queries.ContentfulSchool[];
}

const Index = ({ jobs, projects, schools }: ResumeProps) => (
  <Document title="Jordan Pitlor Resume" author="Jordan Pitlor">
    <Page size="LETTER" style={styles.page}>
      <Text style={styles.title}>Jordan Pitlor</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <View style={styles.iconContainer}>
            <Image style={styles.faIcon} src={readImage("github.png")} />
          </View>
          <Text style={styles.infoText}>jpitlor</Text>
        </View>
        <View style={styles.infoItem}>
          <View style={styles.iconContainer}>
            <Image style={styles.faIcon} src={readImage("envelope.png")} />
          </View>
          <Text style={styles.infoText}>jordan@pitlor.dev</Text>
        </View>
      </View>
      <Section title="Experience">
        <Experience data={jobs} />
      </Section>
      <Section title="Education">
        <Education data={schools} />
      </Section>
      {/*<Section title="Projects">*/}
      {/*  <Projects data={projects} />*/}
      {/*</Section>*/}
    </Page>
  </Document>
);

export default Index;
