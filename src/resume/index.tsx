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
import Projects from "./sections/projects";
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
  infoTextSmall: {
    marginTop: "1mm",
    fontSize: "10px",
    fontFamily: "Rubik",
    fontStyle: "italic",
  },
  title: {
    fontFamily: "Ubuntu Mono",
    fontSize: "48px",
  },
  infoContainerHorizontal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  infoContainerVertical: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-around",
    height: "100%",
  },
  infoItem: {
    display: "flex",
    flexDirection: "row",
  },
});

interface ResumeProps {
  jobs: Job[];
  projects: any[];
  schools: any[];
}

const Index = ({ jobs, projects, schools }: ResumeProps) => (
  <Document title="Jordan Pitlor Resume" author="Jordan Pitlor">
    <Page size="LETTER" style={styles.page}>
      <View style={styles.infoContainerHorizontal}>
        <View style={styles.infoItem}>
          <Text style={styles.title}>Jordan Pitlor</Text>
        </View>
        <View style={styles.infoContainerVertical}>
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
          <View style={styles.infoItem}>
            <Text style={styles.infoTextSmall}>References available upon request</Text>
          </View>
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
    </Page>
  </Document>
);

export default Index;
