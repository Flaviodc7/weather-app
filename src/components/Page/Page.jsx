import React, { Fragment } from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import Forecast from "../Forecast/Forecast";
import "./Page.css";

import useForecast from "../../hooks/useForecast";

const Page = () => {
  const { isError, isLoading, forecast, submitRequest } = useForecast();

  const onSubmit = (value) => {
    submitRequest(value);
  };

  return (
    <Fragment>
      <Header />
      <div className="box position-relative">
        {!isLoading && <Form submitSearch={onSubmit} />}
        {isError && <Error message={isError} />}
        {isLoading && <Loader />}
      </div>
      {forecast && <Forecast />}
    </Fragment>
  );
};

export default Page;
