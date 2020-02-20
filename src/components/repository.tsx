import * as React from 'react';
import marked from 'marked';
import {Link} from 'gatsby';

import useReadme from '../utils/useReadme';

const Repository = ({
    repo: {
        name,
        description,
        homepageUrl,
        url,
        object: {text: readme},
    },
}) => {
    const {title, longDescription} = useReadme(readme);

    return (
        <div className="box">
            <nav className="level is-mobile">
                <div className="level-left">
                    <strong className="level-item">{title}</strong>
                    <small className="level-item">{description}</small>
                </div>
                <div className="level-right">
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
                                className="fas fa-book-open"
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
                                className="fas fa-external-link"
                                aria-hidden="true"
                            />
                        </span>
                    </a>}
                </div>
            </nav>
            <p
                dangerouslySetInnerHTML={{
                    __html: marked(longDescription).slice(3, -5),
                }}
            />
        </div>
    );
};

export default Repository;
