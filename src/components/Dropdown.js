import React from "react";
function Dropdown() {
  return (
    <div id="dropdown">
      <h1>Dropdown</h1>
      <div className="collapse">
        <label htmlFor="collapseex">Click me</label>
        <input type="checkbox" id="collapseex" />
        <div className="box">
          <p>Collapse</p>
        </div>
      </div>
      <div className="dropdown">
        <label htmlFor="dropdownex">Click me</label>
        <input type="checkbox" id="dropdownex" />
        <ul className="box">
          <li>
            <a href="#">Menu 1</a>
          </li>
          <li>
            <a href="#">Menu 1</a>
          </li>
        </ul>
      </div>
      <br />
      <pre className="box">
        <code className="lang-html">
          {`
<div class="collapse">
  <label for="collapseex">Click me</label>
  <input type="checkbox" id="collapseex" />
  <div class="box">
    p>Collapse</p>
  </div>
</div>
<div class="dropdown">
  <label for="dropdownex">Click me</label>
  <input type="checkbox" id="dropdownex" />
  <ul class="box">
    <li>
      <a href="#">Menu 1</a>
    </li>
    <li>
      <a href="#">Menu 1</a>
    </li>
  </ul>
</div>
          `.trim()}
        </code>
      </pre>
    </div>
  );
}

export default Dropdown;
