import React from "react";
function NavbarEx() {
  return (
    <div id="navbar">
      <h1>Navbar</h1>
      <nav className="navbar navbarex">
        <label className="navbar-toggler" htmlFor="menu-sidebar">
          &#8801;
        </label>
        <a className="brand" href="#navbar">
          NEON
        </a>
        <label className="navbar-toggler" htmlFor="menu-navbarex">
          &#8801;
        </label>
        <input type="checkbox" id="menu-navbarex" className="navbar-toggler" />
        <div className="left">
          <a href="#navbar">Link 1</a>
          <a href="#navbar">Link 2</a>
        </div>
        <div className="right">
          <a href="#navbar">Right Link 1</a>
          <a href="#navbar">Right Link 2</a>
        </div>
      </nav>
      <br />
      Try risize your browser
      <pre className="box">
        <code className="lang-html">
          {`
<nav class="navbar fixed"> <!-- fixed class for fixed position -->
    <label class="navbar-toggler" for="menu-sidebar">&#8801;</label> <!-- add this if you use sidebar--->
    <a class="brand" href="#">Brand</a>
    <label class="navbar-toggler" for="menu-navbar">&#8801;</label> <!-- responsive menu toggler--->
    <input type="checkbox" id="menu-navbar" class="navbar-toggler" />
    <div class="left">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
    </div>
    <div class="right">
        <a href="#">Right Link 1</a>
        <a href="#">Right Link 2</a>
    </div>
</nav>
          `.trim()}
        </code>
      </pre>
    </div>
  );
}

export default NavbarEx;
