import React, { Fragment } from "react";
import Grid from "../../components/Grid";
import Home from "../../components/Home";
import Box from "../../components/Box";
import Buttons from "../../components/Buttons";
import Form from "../../components/Form";
import Table from "../../components/Table";
import Dropdown from "../../components/Dropdown";
import Modal from "../../components/Modal";
import Tab from "../../components/Tab";
import NavbarEx from "../../components/NavbarEx";
import Misc from "../../components/Misc";
import SidebarEx from "../../components/SidebarEx";

function Contents() {
  return (
    <Fragment>
      <div className="box turtoise">
        <div className="container">
          <Home />
        </div>
      </div>
      <div className="container">
        <Box />
        <br /><hr />
        <Buttons />
        <br /><hr />
        <Dropdown />
        <br /><hr />
        <Form />
        <br /><hr />
        <Grid />
        <br /><hr />
        <Modal />
        <br /><hr />
        <NavbarEx />
        <br /><hr />
        <SidebarEx />
        <br /><hr />
        <Tab />
        <br /><hr />
        <Table />
        <br /><hr />
        <Misc />
      </div>
    </Fragment>
  );
}
export default Contents;
