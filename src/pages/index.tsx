import React from "react";

import Layout from "../components/layout";
import Education from "../sections/education";
import Projects from "../sections/projects";
import Experience from "../sections/experience";
import Notification from "../components/notification";

const IndexPage = () => (
  <Layout title="Resume">
    <section className="has-background-light">
      <div className="hero-body" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <Notification>
          Looking for a PDF version?&nbsp;
          <a href="/Jordan Pitlor Resume.pdf" download>
            Click here!
          </a>
        </Notification>
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
