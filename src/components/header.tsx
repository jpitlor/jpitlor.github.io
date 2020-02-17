import * as React from "react";
import styled from "styled-components";
import {Link, useStaticQuery, graphql} from "gatsby";

import pages from "../data/pages";
import {ChangeEvent, useContext} from "react";
import {SiteContext} from "./store";

const Container = styled.header`
    background: lightgray;
    margin-bottom: 1.45rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const Image = styled.img`
    border-radius: 100%;
    max-height: 3rem;
`;

interface IconLinkProps {
    icon: string;
    link: string;
}

const IconLink = ({icon, link}: IconLinkProps) => (
    <Link to={link}>
        <i className={`far fa-${icon} fa-3x`} />
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

    const [{showFullHistory}, {showFull, showRecent}] = useContext(SiteContext);
    const onSwitchToggle = (e: ChangeEvent<HTMLInputElement>) =>
        e.target.checked ? showFull() : showRecent();

    return (
        <Container className="level">
            <div className="level-left">
                <Link to="/">
                    <Image src={profile} />
                </Link>
                {pages.map(({route, icon}) => (
                    <IconLink icon={icon} link={route} key={route} />
                ))}
            </div>
            <div className="level-right">
                <div className="field">
                    <input
                        id="switch"
                        type="checkbox"
                        name="switch"
                        className="switch is-rounded"
                        checked={showFullHistory}
                        onChange={onSwitchToggle}
                    />
                    <label htmlFor="switch">
                        Show All Experience
                    </label>
                </div>
            </div>
        </Container>
    );
};

export default Header;
