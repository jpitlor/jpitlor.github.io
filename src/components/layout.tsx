import * as React from "react";
import Helmet from "react-helmet";

import Header from "./header";
import SEO from "./seo";

interface LayoutProps {
    children: React.ReactNode;
    title: string;
}

const Layout = ({title, children}: LayoutProps) => (
    <React.Fragment>
        <SEO title={title} />
        <Helmet>
            <script src="https://kit.fontawesome.com/02a7477264.js" crossOrigin="anonymous" />
        </Helmet>

        <Header />
        <h1 className="is-hidden">{title}</h1>
        {children}
    </React.Fragment>
);

export default Layout;
