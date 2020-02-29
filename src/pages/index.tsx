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

    const documentUrl = encodeURIComponent("https://pitlor.dev/printable-resume");
    const resumeUrl = `http://api.pdflayer.com/api/convert
        ?access_key=${process.env.GATSBY_PDF_LAYER_API_TOKEN}
        &document_url=${documentUrl}
    `.replace(/[\n ]/g, "");

    return (
        <Layout title="Resume">
            <div className="container" style={{maxWidth: "calc(100% - 3rem)"}}>
                <div className="notification is-info">
                    <button className="delete" onClick={removeNotification} />
                    Looking for a PDF version?&nbsp;
                    <a
                        href={resumeUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Click here
                    </a>
                    !
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
            <section className="hero is-light">
                <div className="hero-body">
                    <ContactMe />
                </div>
            </section>
        </Layout>
    );
};

export default IndexPage;
