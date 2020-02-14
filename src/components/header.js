import React from "react";
import styled from "styled-components";
import {Link, useStaticQuery, graphql} from "gatsby";

import pages from "../data/pages";

const Container = styled.header`
    background: rebeccapurple;
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

const IconLink = ({icon, link}) => (
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

    return (
        <Container>
            <Link to="/">
                <Image src={profile} />
            </Link>
            {pages.map(({route, icon}) => (
                <IconLink icon={icon} link={route} />
            ))}
        </Container>
    );
};

export default Header;
