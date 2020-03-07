import * as React from "react";

import Layout from "../components/layout";
import AboutMe from "../sections/about-me";
import CampFitch from "../sections/camp-fitch";

const About = () => (
    <Layout title="About Me">
        <section className="hero">
            <div className="hero-body">
                <AboutMe />
            </div>
        </section>
        <section className="hero">
            <div className="hero-body">
                <CampFitch />
            </div>
        </section>
    </Layout>
);

export default About;
