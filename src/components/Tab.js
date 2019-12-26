import React, { useState } from "react";
import FakeImg from "react-fakeimg";
function Link() {
  const [tab, setTab] = useState("one");
  const [tabimg, setTabImg] = useState("img1");
  return (
    <div id="tab">
      <h1>Tab</h1>

      <h4>Images</h4>
      <div className="tab images">
        <input
          type="radio"
          name="tabimg"
          id="img1"
          value="img1"
          checked={tabimg === "img1"}
          onChange={e => setTabImg(e.target.value)}
        />
        <label for="img1">
          <FakeImg
            alt="example"
            width={100}
            height={100}
            text="1"
            bgColor="#00c4a3"
            fontColor="#ffffff"
          />
        </label>
        <div>
          <FakeImg
            alt="example"
            width={960}
            height={500}
            text="1"
            bgColor="#00c4a3"
            fontColor="#ffffff"
          />
        </div>
        <input
          type="radio"
          name="tabimages"
          id="img2"
          value="img2"
          checked={tabimg === "img2"}
          onChange={e => setTabImg(e.target.value)}
        />
        <label for="img2">
          <FakeImg
            alt="example"
            width={100}
            height={100}
            text="2"
            bgColor="#e74c3c"
            fontColor="#ffffff"
          />
        </label>
        <div>
          <FakeImg
            alt="example"
            width={960}
            height={500}
            text="2"
            bgColor="#e74c3c"
            fontColor="#ffffff"
          />
        </div>
        <input
          type="radio"
          name="tabimages"
          id="img3"
          value="img3"
          checked={tabimg === "img3"}
          onChange={e => setTabImg(e.target.value)}
        />
        <label for="img3">
          <FakeImg
            alt="example"
            width={100}
            height={100}
            text="3"
            bgColor="#666"
            fontColor="#ffffff"
          />
        </label>
        <div>
          <FakeImg
            alt="example"
            width={960}
            height={500}
            text="3"
            bgColor="#666"
            fontColor="#ffffff"
          />
        </div>
        <input
          type="radio"
          name="tabimages"
          id="img4"
          value="img4"
          checked={tabimg === "img4"}
          onChange={e => setTabImg(e.target.value)}
        />
        <label for="img4">
          <FakeImg
            alt="example"
            width={100}
            height={100}
            text="4"
            bgColor="#9b4dca"
            fontColor="#ffffff"
          />
        </label>
        <div>
          <FakeImg
            alt="example"
            width={960}
            height={500}
            text="4"
            bgColor="#9b4dca"
            fontColor="#ffffff"
          />
        </div>
      </div>
      <pre>
        <code className="lang-html">
          {`
<div class="tab images">
  <input type="radio" name="tabs" id="tab1" checked="checked"/>
  <label for="tab1"><img src="..."/></label>
  <div>
    <img src="..."/>
  </div>
  <input type="radio" name="tabs" id="tab2" />
  <label for="tab2"><img src="..."/></label>
  <div>
    <img src="..."/>
  </div>
</div>
          `.trim()}
        </code>
      </pre>
      <h4>Tab Content</h4>
      <div class="tab">
        <input
          type="radio"
          name="tabs"
          id="tabone"
          value="one"
          checked={tab === "one"}
          onChange={e => setTab(e.target.value)}
        />
        <label for="tabone">Tab 1</label>
        <div>
          <h1>Tab 1 Content</h1>
        </div>
        <input
          type="radio"
          name="tabs"
          id="tabtwo"
          value="two"
          checked={tab === "two"}
          onChange={e => setTab(e.target.value)}
        />
        <label for="tabtwo">Tab 2</label>
        <div>
          <h1>Tab 2 Content</h1>
        </div>
        <input
          type="radio"
          name="tabs"
          id="tabthree"
          value="three"
          checked={tab === "three"}
          onChange={e => setTab(e.target.value)}
        />
        <label for="tabthree">Tab 3</label>
        <div>
          <h1>Tab 3 Content</h1>
        </div>
      </div>
      <pre>
        <code className="lang-html">
          {`
<div class="tab">
    <input type="radio" name="tabs" id="tab1" checked="checked"/>
    <label for="tab1">Tab 1</label>
    <div>
        <h1>Tab 1 Content</h1>
    </div>
    <input type="radio" name="tabs" id="tab2" />
    <label for="tab2">Tab 2</label>
    <div>
        <h1>Tab 2 Content</h1>
    </div>
    <input type="radio" name="tabs" id="tab3" />
    <label for="tab3">Tab 3</label>
    <div>
        <h1>Tab 3 Content</h1>
    </div>
</div>
          `.trim()}
        </code>
      </pre>
    </div>
  );
}

export default Link;
