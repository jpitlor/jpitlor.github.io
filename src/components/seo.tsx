import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

function Seo({ title }: { title: string }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  return (
    <>
      <html lang="en" />
      <title>{title || site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.description} />
      <meta property="og:title" content={title || site.siteMetadata.title} />
      <meta property="og:description" content={site.siteMetadata.description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title || site.siteMetadata.title} />
      <meta
        name="twitter:description"
        content={site.siteMetadata.description}
      />
    </>
  );
}

export default Seo;
