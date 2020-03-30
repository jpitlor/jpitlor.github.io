import * as React from "react";
import marked from "marked";
import {Link} from "gatsby";

import useReadme from "../utils/useReadme";
import {GithubDataDataUserPinnedItemsNodes} from "../utils/schema";

interface RepositoryProps {
    repo: GithubDataDataUserPinnedItemsNodes;
}

const Project = ({
    repo: {
        name,
        description,
        homepageUrl,
        url,
        object: {text: readme},
    },
}: RepositoryProps) => {
    const {title, longDescription} = useReadme(readme);

    return (
        <div className="column is-half is-flex">
            <div className="box" style={{width: "100%"}}>
                <nav className="level">
                    <div className="level-left">
                        <strong className="level-item">{title}</strong>
                        <small className="level-item is-hidden-tablet-only is-hidden-desktop-only is-block-widescreen">{description}</small>
                    </div>
                    <div className="level-right">
                        <div className="level is-mobile">
                            <a
                                href={url}
                                className="level-item"
                                aria-label="github"
                            >
                                <span className="icon">
                                    <i
                                        className="fab fa-github"
                                        aria-hidden="true"
                                    />
                                </span>
                            </a>
                            <Link
                                to={`/projects/${name}`}
                                className="level-item"
                                aria-label="read me"
                            >
                                <span className="icon">
                                    <i
                                        className="far fa-book-open"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Link>
                            {homepageUrl && <a
                                href={homepageUrl}
                                className="level-item"
                                aria-label="homepage"
                            >
                                <span className="icon">
                                    <i
                                        className="far fa-external-link"
                                        aria-hidden="true"
                                    />
                                </span>
                            </a>}
                        </div>
                    </div>
                </nav>
                <nav
                    className="level is-hidden-mobile is-hidden-widescreen is-block-tablet-only is-block-desktop-only"
                    style={{marginTop: "-1.5rem"}}
                >
                    <small className="level-left">{description}</small>
                </nav>
                <p
                    dangerouslySetInnerHTML={{
                        __html: marked(longDescription).slice(3, -5),
                    }}
                />
            </div>
        </div>
    );
};

export default Project;
