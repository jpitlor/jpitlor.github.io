import * as React from "react";
import useSchools from "../../utils/useSchools";
import School from "../../components/resume/school";

const Education = () => {
    const schools = useSchools();
    return (
        <React.Fragment>
            {schools.map(school => <School school={school} key={school.name} />)}
        </React.Fragment>
    )
};

export default Education;
