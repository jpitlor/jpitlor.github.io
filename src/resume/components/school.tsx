import * as React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  date: {
    position: "absolute",
    right: 0,
    fontWeight: "bold",
  },
  label: {
    fontWeight: "bold",
  },
  shortDescription: {
    color: "#666666",
  },
});

interface SchoolProps {
  school: Queries.ContentfulSchool;
}

const School = ({ school }: SchoolProps) => (
  <View style={styles.container}>
    <Text style={styles.date}>
      {new Date(school?.startDate ?? "").getFullYear()}
      &nbsp;-&nbsp;
      {new Date(school?.endDate ?? "").getFullYear()}
    </Text>
    <Text>
      <Text style={styles.label}>{school.name}</Text>
      &nbsp;
      <Text style={styles.shortDescription}>
        B.S. {school?.major?.join(", ")}, {school.city} Campus
      </Text>
    </Text>
  </View>
);

export default School;
