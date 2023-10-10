import * as React from "react";
import School from "../components/school";

interface EducationProps {
  data: Queries.ContentfulSchool[];
}

const Education = ({ data }: EducationProps) => {
  return (
    <React.Fragment>
      {data.map((school) => (
        <School school={school} key={school.name} />
      ))}
    </React.Fragment>
  );
};

export default Education;
