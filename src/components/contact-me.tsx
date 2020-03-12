import * as React from "react";
import Section from "./section";

const ContactMe = () => {
    return (
        <Section title="Contact Me">
            <p className="is-tight-desktop">
                Come say hi! I respond on all platforms, but if you&apos;re reaching out about
                employment, please use email.
            </p>
            <br />
            <br />
            <div className="level is-mobile">
                <div className="icon is-large level-item">
                    <a href="mailto:jordan@pitlor.dev">
                        <i className="far fa-envelope fa-3x" />
                    </a>
                </div>
                <div className="icon is-large level-item">
                    <a href="tel:+12164038126">
                        <i className="far fa-phone fa-3x" />
                    </a>
                </div>
                <div className="icon is-large level-item">
                    <a href="https://www.linkedin.com/in/jordan-pitlor/">
                        <i className="fab fa-linkedin fa-3x" />
                    </a>
                </div>
                <div className="icon is-large level-item">
                    <a href="https://www.facebook.com/jordan.pitlor">
                        <i className="fab fa-facebook fa-3x" />
                    </a>
                </div>
                <div className="icon is-large level-item">
                    <a href="https://twitter.com/j__pitty">
                        <i className="fab fa-twitter fa-3x" />
                    </a>
                </div>
                <div className="icon is-large level-item">
                    <a href="https://www.instagram.com/j__pitty/">
                        <i className="fab fa-instagram fa-3x" />
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default ContactMe;
