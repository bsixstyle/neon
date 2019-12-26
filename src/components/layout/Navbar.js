import React, { Fragment } from "react";
function Navbar() {
  return (
    <Fragment>
      <nav className="navbar turtoise">
        <label className="navbar-toggler" htmlFor="menu-sidebar">
          &#8801;
        </label>
        <a className="brand" href="#main">
          NEON
        </a>
        <span></span>
      </nav>
    </Fragment>
  );
}

export default Navbar;
