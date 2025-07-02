import * as React from "react";

const Header = () => {
  return (
    <nav
      role="navigation"
      aria-label="main navigation"
      className="section has-background-light"
    >
      <div className="level columns is-desktop is-tight-desktop">
        <div className="level-item column is-5">
          <h1 className="title has-text-centered">Jordan Pitlor</h1>
        </div>
        <div className="level-item column is-7">
          <div className="notification is-info">
            Looking for a PDF version?&nbsp;
            <a href="/Jordan Pitlor Resume.pdf" download>
              Click here!
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
