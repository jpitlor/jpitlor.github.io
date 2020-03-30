import React, {useState, useEffect} from "react";
import {PDFViewer} from "@react-pdf/renderer";

import Resume from "../templates/resume";
import {useJobs} from "../utils/useJobs";
import useSchools from "../utils/useSchools";
import useProjects from "../utils/useProjects";
import SEO from "../components/seo";

const ResumePage = () => {
    const [inBrowser, setInBrowser] = useState(false);
    const jobs = useJobs();
    const schools = useSchools();
    const projects = useProjects();

    useEffect(() => {
        setInBrowser(true);
    }, [jobs]);

    return (
        <div
            style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100vw",
                height: "100vh",
            }}
        >
            <SEO title="Resume" />
            {inBrowser && <PDFViewer height="100%" width="100%">
                <Resume jobs={jobs} projects={projects} schools={schools} />
            </PDFViewer>}
        </div>
    );
}

export default ResumePage;
