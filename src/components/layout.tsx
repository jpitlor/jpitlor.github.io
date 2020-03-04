import * as React from "react";

import Header from "./header";
import SEO from "./seo";

interface LayoutProps {
    children: React.ReactNode;
    title: string;
}

const Layout = ({title, children}: LayoutProps) => (
    <div>
        <SEO title={title} />
        <Header />
        <h1 className="is-hidden">{title}</h1>
        {children}
    </div>
);

export default Layout;
