import * as React from "react";
import styled from "styled-components";
import {Link, useStaticQuery, graphql} from "gatsby";

const Image = styled.img`
    border-radius: 100%;
    max-height: 200px;
`;

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
            <div className="level is-mobile sm-column">
                {/*
                    Wrapping each of these in spans ensures only the button is a link,
                    not the entire container (which makes what is a link ambiguous)
                 */}
                <span>
                    <Link to="/" className="level-item button is-white is-medium">
                        Resume
                    </Link>
                </span>
                <span>
                    <Link to="/about" className="level-item">
                        <Image src={profile} />
                    </Link>
                </span>
                <span>
                    <Link to="/music" className="level-item button is-white is-medium">
                        Music
                    </Link>
                </span>
            </div>
        </nav>
    );
};

export default Header;
