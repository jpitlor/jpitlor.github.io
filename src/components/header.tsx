import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Header = () => {
  const {
    allContentfulAsset: {
      nodes: [
        {
          resize: { src: profile },
        },
      ],
    },
  } = useStaticQuery(graphql`
    query HeaderQuery {
      allContentfulAsset(filter: { title: { eq: "Profile" } }) {
        nodes {
          resize(height: 250, width: 250, cropFocus: FACES) {
            src
          }
        }
      }
    }
  `);

  return (
    <nav
      role="navigation"
      aria-label="main navigation"
      className="section has-background-light"
    >
      <div className="level is-mobile is-tight-desktop">
        <span className="level-item" style={{ flexShrink: 1 }}>
          <img
            src={profile}
            alt="About"
            style={{
              borderRadius: "100%",
              maxHeight: "200px",
            }}
          />
        </span>
        <h1 className="level-item title is-1">Jordan Pitlor</h1>
      </div>
    </nav>
  );
};

export default Header;
