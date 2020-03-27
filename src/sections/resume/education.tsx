import * as React from "react";
import School from "../../components/resume/school";
import {ContentfulSchool} from "../../utils/schema";

interface EducationProps {
    data: ContentfulSchool[];
}

const Education = ({data}: EducationProps) => {
    return (
        <React.Fragment>
            {data.map(school => <School school={school} key={school.name} />)}
        </React.Fragment>
    )
};

export default Education;
