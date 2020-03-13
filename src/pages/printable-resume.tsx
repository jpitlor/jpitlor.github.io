import * as React from "react";
import SEO from "../components/seo";
import useSchools from "../utils/useSchools";
import useProjects from "../utils/useProjects";
import {useJobs} from "../utils/useJobs";
import ResumeSection from "../components/resume-section";

const PrintableResume = () => {
    const jobs = useJobs().flatMap(g => g[1]).filter(j => j.useInResume);
    const schools = useSchools();
    const pinnedRepositories = useProjects();

    return (
        <div
            style={{
                width: "8.5in",
                height: "11in",
                padding: "0.25in",
                overflow: "hidden",
            }}
        >
            <SEO title="Resume" />
            <div className="level">
                <h1 className="title is-1 level-item">Jordan Pitlor</h1>
            </div>
            <div className="level">
                <span className="level-item">
                    <i className="fab fa-github fa-2x" />
                    &nbsp;&nbsp;
                    <span className="subtitle is-5">piticent123</span>
                </span>
                <span className="level-item">
                    <i className="far fa-envelope fa-2x" />
                    &nbsp;&nbsp;
                    <span className="subtitle is-5">jordan@pitlor.dev</span>
                </span>
                <span className="level-item">
                    <i className="far fa-phone fa-2x" />
                    &nbsp;&nbsp;
                    <span className="subtitle is-5">(216) 403-8126</span>
                </span>
            </div>
            <ResumeSection title="Experience">
                {jobs.map(job => (
                    <div key={job.company}>
                        {job.company}
                    </div>
                ))}
            </ResumeSection>
            <ResumeSection title="Projects">
                {pinnedRepositories.map(repo => (
                    <div key={repo.name}>
                        {repo.name}
                    </div>
                ))}
            </ResumeSection>
            <ResumeSection title="Education">
                {schools.map(school => (
                    <div key={school.name}>
                        {school.name}
                    </div>
                ))}
            </ResumeSection>
        </div>
    )
};

export default PrintableResume;
