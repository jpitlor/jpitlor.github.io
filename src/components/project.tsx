import * as React from "react";
import { marked } from "marked";

import useReadme from "../utils/useReadme";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLink} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

interface RepositoryProps {
  repo: any;
}

const Project = ({
  repo: { description, homepageUrl, url, object: readme },
}: RepositoryProps) => {
  const { title, longDescription } = useReadme(readme?.text ?? "");

  return (
    <div className="column is-full is-half-desktop is-flex">
      <div className="box" style={{ width: "100%" }}>
        <nav className="level">
          <div className="level-left">
            <strong className="level-item">{title}</strong>
          </div>
          <div className="level-right">
            <div className="level is-mobile">
              <a href={url ?? ""} className="level-item" aria-label="github">
                <span className="icon">
                  <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
                </span>
              </a>
              {homepageUrl && (
                <a
                  href={homepageUrl}
                  className="level-item"
                  aria-label="homepage"
                >
                  <span className="icon">
                    <FontAwesomeIcon icon={faExternalLink} aria-hidden="true" />
                  </span>
                </a>
              )}
            </div>
          </div>
        </nav>
        <nav className="level" style={{ marginTop: "-1.5rem" }}>
          <small className="level-left">{description}</small>
        </nav>
        <p
          dangerouslySetInnerHTML={{
            __html: marked(longDescription ?? "").slice(3, -5),
          }}
        />
      </div>
    </div>
  );
};

export default Project;
