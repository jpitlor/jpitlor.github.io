import * as React from "react";
import SEO from "../components/seo";
// import {useJobsRaw, useProjects, useSchools} from "../utils/useData";

const PrintableResume = () => {
    // const jobs = useJobsRaw();
    // const schools = useSchools();
    // const pinnedRepositories = useProjects();
    // console.log(jobs, schools, pinnedRepositories);

    return (
        <div
            style={{
                width: "8.5in",
                height: "11in",
                padding: "0.25in",
            }}
        >
            <SEO title="Resume" />
            <h1>This is different text!</h1>
        </div>
    )
};

export default PrintableResume;
