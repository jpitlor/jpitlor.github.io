import * as React from "react";

import Header from "./header";
import SEO from "./seo";
import ContactMe from "./contact-me";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout = ({ title, children }: LayoutProps) => (
  <React.Fragment>
    <SEO title={title} />
    <Header />
    <h1 className="sr-only">{title}</h1>
    {children}
    <footer className="footer has-background-light">
      <ContactMe />
    </footer>
  </React.Fragment>
);

export default Layout;
