import * as React from "react";
import styled, {createGlobalStyle} from "styled-components";
import Helmet from "react-helmet";

import Header from "./header";
import SEO from "./seo";

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

const Title = styled.h1`
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: 18px;
    text-align: center;
`;

interface LayoutProps {
    children: React.ReactNode;
    title: string;
}

const Layout = ({title, children}: LayoutProps) => (
    <React.Fragment>
        <SEO title={title} />
        <GlobalStyles />
        <Helmet>
            <script src="https://kit.fontawesome.com/02a7477264.js" crossOrigin="anonymous"/>
        </Helmet>
        <ContentWrapper>
            <Header />
            <Main>
                <Title className="has-text-grey">{title}</Title>
                {children}
            </Main>
        </ContentWrapper>
    </React.Fragment>
);

export default Layout;
