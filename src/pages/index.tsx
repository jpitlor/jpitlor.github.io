import * as React from "react";

import Layout from "../components/layout";
import Education from "../sections/education";
import Projects from "../sections/projects";
import Experience from "../sections/experience";
import ContactMe from "../components/contact-me";

const IndexPage = () => {
    function removeNotification() {
        const notification = document.querySelector(".notification");
        if (notification && notification.parentElement) {
            notification.parentElement.removeChild(notification);
        }
    }

    return (
        <Layout title="Resume">
            <div className="container">
                <div className="notification is-info">
                    <button className="delete" onClick={removeNotification} />
                    Looking for a PDF version? <a href="#">Click here</a>!
                </div>
            </div>

            <section className="hero">
                <div className="hero-body">
                    <Experience />
                </div>
            </section>
            <section className="hero is-light">
                <div className="hero-body">
                    <Projects />
                </div>
            </section>
            <section className="hero">
                <div className="hero-body">
                    <Education />
                </div>
            </section>
            <section>
                <ContactMe />
            </section>
        </Layout>
    );
};

export default IndexPage;
