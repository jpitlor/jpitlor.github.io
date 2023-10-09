import * as React from "react";
import { marked } from "marked";

import Layout from "../components/layout";

const Project = ({ pageContext: { repo } }: any) => {
  const {
    name,
    // description,
    // homepageUrl,
    // url,
    object: { text: readme },
  } = repo;

  // For SEO reasons, headers need to be knocked down one level,
  // but they can keep their styles
  const __html = marked(readme).replace(
    /<h(\d) /g,
    (_: any, n: number) => `<h${Number(n) + 1} class="is-${n}" `
  );

  return (
    <Layout title={name}>
      <section className="hero is-light">
        <div className="hero-body">
          <div
            className="content is-tight-desktop"
            dangerouslySetInnerHTML={{ __html }}
          />
        </div>
      </section>
    </Layout>
  );
};

export default Project;
