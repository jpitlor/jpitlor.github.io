import * as React from "react";

import Layout from "../components/layout";
import Education from "../sections/education";
import Projects from "../sections/projects";
import Experience from "../sections/experience";
import Notification from "../components/notification";
import {Link} from "gatsby";

const IndexPage = () => {
    return (
        <Layout title="Resume">
            <section className="has-background-light">
                <Notification>
                    Looking for a PDF version?&nbsp;
                    <Link to="/resume">Go here!</Link>
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
