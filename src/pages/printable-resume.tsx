import * as React from "react";
import {useJobs, useProjects, useSchools} from "../utils/useData";

const PrintableResume = () => {
    const jobs = useJobs();
    const schools = useSchools();
    const pinnedRepositories = useProjects();
    console.log(jobs, schools, pinnedRepositories);

    return (
        <h1>This is different text!</h1>
    )
};

export default PrintableResume;
