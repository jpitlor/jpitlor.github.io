import * as React from "react";
import { marked } from "marked";

import useReadme from "../utils/useReadme";

interface RepositoryProps {
  repo: Queries.GithubDataDataUserPinnedItemsNodes;
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
                  <i className="fab fa-github" aria-hidden="true" />
                </span>
              </a>
              {homepageUrl && (
                <a
                  href={homepageUrl}
                  className="level-item"
                  aria-label="homepage"
                >
                  <span className="icon">
                    <i className="far fa-external-link" aria-hidden="true" />
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
