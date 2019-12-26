import React, {Fragment} from "react";

function Grid() {
  return (
    <div id="grid">
      <h1>Grid</h1>
      <div className="row">
        {Array.from(Array(6), (e, i) => {
          return (
            <Fragment key={i}>
              <div className={"c-" + (i + 1)}>
                <div className="box turtoise">{"c-" + (i + 1)}</div>
              </div>
              <div className={"c-" + (12 - (i + 1))}>
                <div className="box red">{"c-" + (12 - (i + 1))}</div>
              </div>
            </Fragment>
          );
        })}
      </div>
      <br />
      <pre className="box">
        <code className="lang-html">
          {`
<div class="row">
    <div class="c-1">
        <div class="box">c-1</div>
    </div>
    <div class="c-11">
        <div class="box">c-11</div>
    </div>
    <div class="c-2">
        <div class="box">c-2</div>
    </div>
    <div class="c-10">
        <div class="box">c-10</div>
    </div>
    <div class="c-3">
        <div class="box">c-3</div>
    </div>
    <div class="c-9">
        <div class="box">c-9</div>
    </div>
    <div class="c-4">
        <div class="box">c-4</div>
    </div>
    <div class="c-8">
        <div class="box">c-8</div>
    </div>
    <div class="c-5">
        <div class="box">c-5</div>
    </div>
    <div class="c-7">
        <div class="box">c-7</div>
    </div>
    <div class="c-6">
        <div class="box">c-6</div>
    </div>
    <div class="c-6">
        <div class="box">c-6</div>
    </div>
</div>
          `.trim()}
        </code>
      </pre>

      <h1>Offset</h1>
      <div className="row">
        {Array.from(Array(6), (e, i) => {
          return (
            <Fragment key={i}>
              <div className={"c-" + (i + 1) + " m-" + +(12 - (i + 1))}>
                <div className="box turtoise">
                  {"c-" + (i + 1) + " m-" + +(12 - (i + 1))}
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
      <br />
      <pre className="box">
        <code className="lang-html">
          {`
<div class="row">
    <div class="c-1 m-11">
        <div class="box">c-1 m-11</div>
    </div>
    <div class="c-2 m-10">
        <div class="box">c-2 m-10</div>
    </div>
    <div class="c-3 m-9">
        <div class="box">c-3 m-9</div>
    </div>
    <div class="c-4 m-8">
        <div class="box">c-4 m-8</div>
    </div>
    <div class="c-5 m-7">
        <div class="box">c-5 m-7</div>
    </div>
    <div class="c-6 m-6">
        <div class="box">c-6 m-6</div>
    </div>
</div>
          `.trim()}
        </code>
      </pre>
    </div>
  );
}

export default Grid;
