import React, { Fragment } from "react";
import Header from "../Header/Header";
import Form from "../Form/Form"
import "./Page.css";

const Page = () => {
  return (
    <Fragment>
      <Header />
      <div className="box">
        <Form />
      </div>
    </Fragment>
  );
};

export default Page;
