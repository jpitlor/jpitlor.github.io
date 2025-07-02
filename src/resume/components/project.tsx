import * as React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

import useReadme from "../../utils/useReadme";

const styles = StyleSheet.create({
  container: {
    marginBottom: "3mm",
    position: "relative",
  },
  label: {
    fontWeight: "bold",
  },
  description: {
    marginTop: "2pt",
    width: "100%",
  },
  shortDescription: {
    color: "#666666",
  },
});

interface ProjectProps {
  project: any;
}

const Project = ({ project }: ProjectProps) => {
  const { title, longDescription } = useReadme(project.object?.text ?? "");

  function unmarked(md: string): string {
    return md
      .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
      .replace(/\n/g, " ")
      .replace(/[ ][ ]/g, " ");
  }

  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.label}>{title}</Text>
        &nbsp;
        <Text style={styles.shortDescription}>{project.description}</Text>
      </Text>
      <Text style={styles.description}>{unmarked(longDescription ?? "")}</Text>
    </View>
  );
};

export default Project;
