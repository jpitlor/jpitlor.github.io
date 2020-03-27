import * as React from "react";
import {PDFDownloadLink} from "@react-pdf/renderer";

import Layout from "../components/layout";
import Education from "../sections/education";
import Projects from "../sections/projects";
import Experience from "../sections/experience";
import Notification from "../components/notification";
import Resume from "../templates/resume";

const IndexPage = () => {
    return (
        <Layout title="Resume">
            <section className="has-background-light">
                <Notification>
                    Looking for a PDF version?&nbsp;
                    <PDFDownloadLink document={<Resume />} fileName="Jordan Pitlor Resume.pdf">
                        {({loading}) => loading ? "Loading" : "Click here!"}
                    </PDFDownloadLink>
                </Notification>
            </section>
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
