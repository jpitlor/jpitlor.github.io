import * as React from "react";
import {Link, useStaticQuery, graphql} from "gatsby";

const Header = () => {
    const {
        file: {
            childImageSharp: {
                fixed: {
                    src: profile,
                },
            },
        },
    } = useStaticQuery(graphql`
        query MyQuery {
            file(relativePath: {eq: "me.jpg"}) {
                childImageSharp {
                    fixed(height: 1000, width: 1000) {
                        src
                    }
                }
            }
        }
    `);

    return (
        <nav role="navigation" aria-label="main navigation" className="section">
            <div className="level is-mobile is-tight-desktop">
                {/*
                    Wrapping each of these in spans ensures only the button is a link,
                    not the entire container (which makes what is a link ambiguous)
                 */}
                <span className="level-item">
                    <Link to="/" className="button is-white is-medium">
                        Resume
                    </Link>
                </span>
                <span className="level-item">
                    <Link to="/about">
                        <img
                            src={profile}
                            alt="About"
                            style={{
                                borderRadius: "100%",
                                maxHeight: "200px",
                            }}
                        />
                    </Link>
                </span>
                <span className="level-item">
                    <Link to="/music" className="button is-white is-medium">
                        Music
                    </Link>
                </span>
            </div>
        </nav>
    );
};

export default Header;
