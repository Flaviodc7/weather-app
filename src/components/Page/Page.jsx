import React, { Fragment } from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";
import Error from "../Error/Error"
import Loader from "../Loader/Loader"
import Forecast from "../Forecast/Forecast"
import "./Page.css";

import useForecast from "../../hooks/useForecast";

const Page = () => {
  const {isError, isLoading, forecast} = useForecast();
  return (
    <Fragment>
      <Header />
      <div className="box">
        <Form />
        {isError && <Error />}
        {isLoading && <Loader />}
        {forecast && <Forecast />}
      </div>
    </Fragment>
  );
};

export default Page;
