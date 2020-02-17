import * as React from "react";
import styled, {createGlobalStyle} from "styled-components";
import Helmet from "react-helmet";

import Header from "./header";
import Store from './store';
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
    font-size: 18px;
    text-align: center;
`;

interface LayoutProps {
    children: React.ReactNode;
    title: string;
}

const Layout = ({title, children}: LayoutProps) => {
    return (
        <Store>
            <SEO title={title} />
            <GlobalStyles />
            <Helmet>
                <script src="https://kit.fontawesome.com/02a7477264.js" crossOrigin="anonymous"/>
            </Helmet>
            <ContentWrapper>
                <Header />
                <Main>
                    <Title>{title}</Title>
                    {children}
                </Main>
            </ContentWrapper>
        </Store>
    );
};

export default Layout;
