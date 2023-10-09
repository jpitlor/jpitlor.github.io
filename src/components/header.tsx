import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

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
          resize(height: 250, width: 250, cropFocus: FACE) {
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
        {/*
                    Wrapping each of these in spans ensures only the button is a link,
                    not the entire container (which makes what is a link ambiguous)
                 */}
        <span className="level-item">
          <Link to="/" className="button is-light is-medium">
            Resume
          </Link>
        </span>
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
        <span className="level-item">
          <Link to="/music" className="button is-light is-medium">
            Music
          </Link>
        </span>
      </div>
    </nav>
  );
};

export default Header;
