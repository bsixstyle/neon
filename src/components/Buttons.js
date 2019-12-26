import React from "react";
function Buttons() {
  return (
    <div id="buttons">
      <h1>Buttons</h1>
      <button>normal</button>&nbsp;
      <button className="red">red</button>&nbsp;
      <button className="orange">orange</button>&nbsp;
      <button className="green">green</button>&nbsp;
      <button disabled>disable</button>
      <br />
      <br />
      <button className="big">big button</button>
      <br />
      <p>
      You can add more colors by adding new class with new background color, <span className="green">default of colors, orange, red & green</span>
      </p>
      <pre className="box">
        <code className="lang-html">
          {`
<button>normal</button>&nbsp; <!-- nbsp is for space, if you want add group input just remove the space -->
<button class="red">red</button>&nbsp;
<button class="orange">orange</button>&nbsp;
<button class="green">green</button>&nbsp;
<button disabled>disable</button>&nbsp;
<button class="big">big button</button>&nbsp;
          `.trim()}
        </code>
      </pre>
    </div>
  );
}

export default Buttons;
