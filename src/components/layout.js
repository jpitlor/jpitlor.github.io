import React from "react";
import PropTypes from "prop-types";
import {useStaticQuery, graphql} from "gatsby";
import styled, {createGlobalStyle} from "styled-components";

import Header from "./header";

const GlobalStyles = createGlobalStyle `
    body {
        margin: 0;
    }
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

    return (<React.Fragment>
        <GlobalStyles />
        <Header siteTitle={title}/>
        <div 
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
            }} 
        >
            <main>{children}</main>
            <footer>© Jordan Pitlor {new Date().getFullYear()}</footer> 
        </div>
    </React.Fragment>);
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;