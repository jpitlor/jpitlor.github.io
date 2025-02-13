import * as React from "react";
import Section from "./section";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const ContactMe = () => (
  <Section title="Contact Me">
    <p className="is-tight-desktop">
      Please say hi! If you send me a message, I&apos;ll typically respond
      within one or two days.
    </p>
    <br />
    <br />
    <div className="columns is-tight-desktop is-mobile">
      <div className="icon is-large column has-text-centered">
        <a href="mailto:jordan@pitlor.dev">
          <FontAwesomeIcon icon={faEnvelope} className="is-size-1 is-size-3-mobile" />
        </a>
      </div>
      <div className="icon is-large column has-text-centered">
        <a href="https://www.linkedin.com/in/jordan-pitlor/">
          <FontAwesomeIcon icon={faLinkedin} className="is-size-1 is-size-3-mobile" />
        </a>
      </div>
    </div>
  </Section>
);

export default ContactMe;
