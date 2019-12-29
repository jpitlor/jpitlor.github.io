import React from "react";
import PropTypes from "prop-types";
import {useStaticQuery, graphql} from "gatsby";
import styled, {createGlobalStyle} from "styled-components";
import Helmet from "react-helmet";

import Header from "./header";
import Store from './store';

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
    }
`;

const ContentWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

const Main = styled.main`
    flex: 1;
`;

const Layout = ({children}) => {
    const {site: {siteMetadata: {title}}} = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (<Store>
        <GlobalStyles />
        <Helmet>
            <script src="https://kit.fontawesome.com/02a7477264.js" crossorigin="anonymous"></script>
        </Helmet>
        <ContentWrapper>
            <Header siteTitle={title}/>
            <Main>{children}</Main>
            <footer>© Jordan Pitlor {new Date().getFullYear()}</footer> 
        </ContentWrapper>
    </Store>);
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;