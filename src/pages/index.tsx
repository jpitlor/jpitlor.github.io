import React, {useState, useEffect} from "react";
import {PDFDownloadLink} from "@react-pdf/renderer";

import Layout from "../components/layout";
import Education from "../sections/education";
import Projects from "../sections/projects";
import Experience from "../sections/experience";
import Resume from "../templates/resume";
import Notification from "../components/notification";
import {useJobs} from "../utils/useJobs";
import useSchools from "../utils/useSchools";
import useProjects from "../utils/useProjects";

const IndexPage = () => {
    const [inBrowser, setInBrowser] = useState(false);
    const jobs = useJobs();
    const schools = useSchools();
    const projects = useProjects();

    useEffect(() => {
        setInBrowser(true);
    }, []);

    return (
        <Layout title="Resume">
            {inBrowser && <section className="has-background-light">
                <div className="hero-body" style={{paddingTop: 0, paddingBottom: 0}}>
                    <Notification>
                        Looking for a PDF version?&nbsp;
                        <PDFDownloadLink
                            document={<Resume jobs={jobs} projects={projects} schools={schools} />}
                            fileName="Jordan Pitlor Resume.pdf"
                        >
                            {({loading}) => loading ? "Loading" : "Click here!"}
                        </PDFDownloadLink>
                    </Notification>
                </div>
            </section>}
            <section className="hero is-light">
                <div className="hero-body">
                    <Experience />
                </div>
            </section>
            <section className="hero is-light">
                <div className="hero-body">
                    <Projects />
                </div>
            </section>
            <section className="hero is-light">
                <div className="hero-body">
                    <Education />
                </div>
            </section>
        </Layout>
    );
};

export default IndexPage;
