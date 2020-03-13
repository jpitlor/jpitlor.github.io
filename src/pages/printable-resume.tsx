import * as React from "react";
import SEO from "../components/seo";
import Section from "../components/resume/section";
import Education from "../sections/resume/education";
import Experience from "../sections/resume/experience";
import Projects from "../sections/resume/projects";

const PrintableResume = () => {
    return (
        <div
            style={{
                width: "8.5in",
                height: "11in",
                padding: "0.25in",
                overflow: "hidden",
                border: "1px solid black",
            }}
        >
            <SEO title="Resume" />
            <div className="level">
                {/* <h1 className="title is-1 level-item" style={{fontFamily: "Jetbrains Mono, monospace"}}> */}
                {/*    Jordan Pitlor */}
                {/* </h1> */}
                <span className="subtitle is-5 level-item">
                    This resume is under construction. Please visit jordanpitlor.com/resume
                </span>
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
            <Section title="Experience">
                <Experience />
            </Section>
            <Section title="Projects">
                <Projects />
            </Section>
            <Section title="Education">
                <Education />
            </Section>
        </div>
    )
};

export default PrintableResume;
