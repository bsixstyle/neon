import React from "react";
function Misc() {
  return (
    <div id="misc">
      <h1>Miscellaneous</h1>
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <h6>h6</h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        euismod, sem eu varius pretium, ligula nisl blandit tellus, porttitor
        scelerisque nisi nisi vitae dui. Vivamus ut vestibulum libero. Donec
        enim ante, aliquet sit amet vestibulum ut, accumsan ac augue.
      </p>
      <blockquote>
        <p>
          neon it's 100% css, no need javascripts. with basic and ugly
          style.
        </p>
        <footer>
          Me, <cite>Brave New World</cite>
        </footer>
      </blockquote>
      <pre className="box">
        <code className="lang-html">
          {`
<h1>h1</h1>
<h2>h2</h2>
<h3>h3</h3>
<h4>h4</h4>
<h5>h5</h5>
<h6>h6</h6>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
  euismod, sem eu varius pretium, ligula nisl blandit tellus, porttitor
  scelerisque nisi nisi vitae dui. Vivamus ut vestibulum libero. Donec
  enim ante, aliquet sit amet vestibulum ut, accumsan ac augue.
</p>
<blockquote>
<p>
  neon it's 100% css, no need javascripts. with basic and ugly
  style.
</p>
<footer>
  Me, <cite>Brave New World</cite>
</footer>
</blockquote>
          `.trim()}
        </code>
      </pre>
      <h1>Tooltip</h1>
      <span data-tooltip="Hohoho">Hover me</span>
      <pre className="box">
        <code className="lang-html">
          {`
 <span data-tooltip="Hohoho">Hover me</span>
          `.trim()}
        </code>
      </pre>
    </div>
  );
}

export default Misc;
