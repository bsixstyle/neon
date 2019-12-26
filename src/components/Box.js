import React from "react";
function Box() {
  return (
    <div id="box">
      <h1>Box</h1>
    
      <div className="row">
        <div className="c-4">
          <div className="box orange">
            <h3>I'm orange box</h3>
            <div>
              <p>What ever here</p>
            </div>
          </div>
        </div>
        <div className="c-4">
          <div className="box turtoise">
            <h3>I'm turtoise box</h3>
            <div>
              <p>What ever here</p>
            </div>
          </div>
        </div>
        <div className="c-4">
          <div className="box green">
            <h3>I'm green box</h3>
            <div>
              <p>What ever here</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="box red">
        alert?
      </div>
      <br />
      <pre>
        <code className="lang-html">
          {`
<div className="row">
    <div className="c-4">
        <div className="box orange">
            <h3>I'm orange box</h3>
            <div>
            <p>What ever here</p>
            </div>
        </div>
    </div>
    <div className="c-4">
        <div className="box turtoise">
            <h3>I'm turtoise box</h3>
            <div>
            <p>What ever here</p>
            </div>
        </div>
    </div>
    <div className="c-4">
        <div className="box green">
            <h3>I'm green box</h3>
            <div>
            <p>What ever here</p>
            </div>
        </div>
    </div>
</div>
<br />
<div className="box red">
    alert?
</div>
          `.trim()}
        </code>
      </pre>
    </div>
  );
}

export default Box;
