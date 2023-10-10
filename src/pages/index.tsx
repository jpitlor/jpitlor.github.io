import React from "react";

import Layout from "../components/layout";
import Education from "../sections/education";
import Projects from "../sections/projects";
import Experience from "../sections/experience";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout title="Resume">
    <section className="has-background-light">
      <div className="hero-body" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="container">
          <div className="notification is-info">
            Looking for a PDF version?&nbsp;
            <a href="/Jordan Pitlor Resume.pdf" download>
              Click here!
            </a>
          </div>
        </div>
      </div>
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

export default IndexPage;

export const Head = () => <Seo title="Resume" />;
