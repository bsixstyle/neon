import React, { Fragment } from "react";
function Sidebar() {
  return (
    <Fragment>
      <input type="checkbox" className="navbar-toggler" id="menu-sidebar" />
      <label
        htmlFor="menu-sidebar"
        className="overlay"
        id="menu-overlay"
      ></label>
      <div id="menu-neon">
        <h3>MENU</h3>
        <a href="#main">Home</a>
        <a href="#box">Box</a>
        <a href="#buttons">Buttons</a>
        <a href="#dropdown">Dropdown</a>
        <a href="#form">Form</a>
        <a href="#grid">Grid</a>
        <a href="#modal">Modal</a>
        <a href="#navbar">Navbar</a>
        <a href="#sidebar">Sidebar</a>
        <a href="#tab">Tab</a>
        <a href="#table">Table</a>        
        <a href="#misc">Miscellaneous</a>
      </div>
    </Fragment>
  );
}

export default Sidebar;
