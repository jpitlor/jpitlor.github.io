import * as React from "react";
import styled from "styled-components";
import {Link, useStaticQuery, graphql} from "gatsby";

import pages from "../data/pages";

const Image = styled.img`
    border-radius: 100%;
    max-height: 3rem;
`;

interface IconLinkProps {
    icon: string;
    link: string;
    className: string;
}

const IconLink = ({icon, link, className}: IconLinkProps) => (
    <Link to={link} className={className}>
        <i className={`far fa-${icon} fa-2x`} />
    </Link>
);

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
                    fixed(height: 100) {
                        src
                    }
                }
            }
        }
    `);

    return (
        <nav
            className="navbar is-primary section-end"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <Image src={profile} />
                </Link>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                   data-target="navbarBasicExample">
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    {pages.map(({route, icon}) => (
                        <IconLink
                            icon={icon}
                            link={route}
                            key={route}
                            className="navbar-item"
                        />
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Header;
