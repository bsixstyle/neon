import React, { Fragment, useEffect } from "react";
import Prism from "prismjs";

import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Contents from "./components/layout/Contents";

import "./scss/neon.scss";
import "./custom.scss";
import "./prism.scss";
function App() {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <Fragment>
      <Sidebar />
      <div id="main">
        <Navbar />
        <Contents />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
