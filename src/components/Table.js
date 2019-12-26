import React from "react";
function Table() {
  return (
    <div id="table">
      <h1>Table</h1>
      <table className="responsive">
        <thead>
          <tr>
            <th>#</th>
            <th>Brand</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td data-label="Brand">Microsoft</td>
            <td>
              <button>Edit</button>
              <button className="red">Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td data-label="Brand">Google</td>
            <td>
              <button>Edit</button>
              <button className="red">Delete</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td data-label="Brand">
              <input type="text" placeholder="text" />
            </td>
            <td>
              <button>Add</button>
            </td>
          </tr>
        </tfoot>
      </table>
      <pre className="box">
        <code className="lang-html">
          {`
<table class="responsive">
    <tr>
        <th>#</th>
        <th>Brand</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>1</td>
        <td data-label="Brand">Microsoft</td>
        <td>
            <button>Edit</button>
            <button class="red">Delete</button>
        </td>
    </tr>
    <tr>
        <td>2</td>
        <td data-label="Brand">Google</td>
        <td>
            <button>Edit</button>
            <button class="red">Delete</button>
        </td>
    </tr>
</table>
          `.trim()}
        </code>
      </pre>
    </div>
  );
}

export default Table;
