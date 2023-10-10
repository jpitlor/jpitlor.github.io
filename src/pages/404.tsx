import * as React from "react";

import Layout from "../components/layout";
import Section from "../components/section";
import { useEffect } from "react";
import { navigate } from "gatsby";
import Seo from "../components/seo";

const NotFoundPage = () => {
  useEffect(() => {
    navigate("/");
  });

  return (
    <Layout title="Page Not Found">
      <div className="has-background-light">
        <Section title="This route doesn't exist">
          <p className="is-tight-desktop">
            You should be redirected to the home page now.
          </p>
        </Section>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <Seo title="Page Not Found" />;
