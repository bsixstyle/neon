import React from "react";
function Form() {
  return (
    <div id="form">
      <h1>Form</h1>
      <div className="row">
        <div className="c-6">
          <label htmlFor="invalid">Label</label>
          <input type="text" placeholder="text" id="invalid" required />
          <span className="red">This field is required</span>
        </div>
        <div className="c-6">
          <label>Label</label>
          <textarea placeholder="text area" />
        </div>
      </div>
      <br />
      <input type="text" placeholder="disabled" disabled />
      <br />
      <br />
      <input type="text" placeholder="big" className="big" />
      <br />
      <br />
      <select>
        <option>1</option>
        <option>2</option>
      </select>
      <br />
      <br />
      <input type="radio" id="radio1" name="radio" />
      <label htmlFor="radio1">radio 1</label>&nbsp;
      <input type="radio" id="radio2" name="radio" />
      <label htmlFor="radio2">radio 2</label>&nbsp;
      <input type="radio" id="radio3" name="radio" disabled />
      <label htmlFor="radio3">disabled</label>&nbsp;
      <br />
      <br />
      <input type="checkbox" id="checkenable" />
      <label htmlFor="checkenable">enable</label>&nbsp;
      <input type="checkbox" id="checkdisabled" disabled />
      <label htmlFor="checkdisabled">disabled</label>&nbsp;
      <input type="checkbox" id="checkeddisabled" checked disabled />
      <label htmlFor="checkeddisabled">checked disabled</label>
      <br />
      <br />
      <input type="submit" value="submit" />
    
    
      <pre className="box">
        <code className="lang-html">
          {`
<div class="row">
  <div class="c-6">
      <label for="invalid">Label</label>
      <input type="text" placeholder="text" id="invalid" required/>
      <span class="red">This field is required</span></div>
  <div class="c-6">
      <label>Label</label>
      <textarea placeholder="text area"></textarea>
  </div>
</div>
<br>
<input type="text" placeholder="disabled" disabled="">
<br>
<br>
<input type="text" placeholder="big" class="big">
<br>
<br>
<select>
<option>1</option>
<option>2</option>
</select>
<br>
<br>
<input type="radio" id="radio1" name="radio">
<label for="radio1">radio 1</label>&nbsp;
<input type="radio" id="radio2" name="radio">
<label for="radio2">radio 2</label>&nbsp;
<input type="radio" id="radio3" name="radio" disabled="">
<label for="radio3">disabled</label>&nbsp;
<br>
<br>
<input type="checkbox" id="checkenable">
<label for="checkenable">enable</label>&nbsp;
<input type="checkbox" id="checkdisabled" disabled="">
<label for="checkdisabled">disabled</label>&nbsp;
<input type="checkbox" id="checkeddisabled" disabled="" checked="">
<label for="checkeddisabled">checked disabled</label>
<br>
<br>
<input type="submit" value="submit">
          `.trim()}
        </code>
      </pre>
    </div>
  );
}

export default Form;
