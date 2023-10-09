import * as React from "react";
import Section from "./section";

const ContactMe = () => (
    <Section title="Contact Me">
        <p className="is-tight-desktop">
            Please say hi! If you send me a message, I&apos;ll typically respond within one or two days.
        </p>
        <br />
        <br />
        <div className="columns is-mobile">
            <div className="icon is-large column has-text-centered">
                <a href="mailto:jordan@pitlor.dev">
                    <i className="far fa-envelope is-size-1 is-size-3-mobile" />
                </a>
            </div>
            <div className="icon is-large column has-text-centered">
                <a href="https://www.linkedin.com/in/jordan-pitlor/">
                    <i className="fab fa-linkedin is-size-1 is-size-3-mobile" />
                </a>
            </div>
        </div>
    </Section>
);

export default ContactMe;
