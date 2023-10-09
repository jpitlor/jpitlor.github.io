import * as React from "react";
import useSchools from "../utils/useSchools";
import Section from "../components/section";
import School from "../components/school";

export default function Education() {
  const schools = useSchools();
  schools.sort((a, b) => {
    const x = new Date(a.startDate).getTime();
    const y = new Date(b.startDate).getTime();

    if (x > y) return -1;
    else if (x < y) return 1;
    else return 0;
  });

  return (
    <Section title="Education">
      {schools.map((s) => (
        <School school={s} key={s.name} />
      ))}
    </Section>
  );
}
