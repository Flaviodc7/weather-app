import axios from "axios";
import { useState } from "react";

const BASE_URL = "https://www.metaweather.com/api/location";
const CROSS_DOMAIN = "https://the-ultimate-api-challenge.herokuapp.com";
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const getWoeid = async (location) => {
    const { data } = await axios(`${REQUEST_URL}/search`, {
      params: { query: location },
    });

    if (!data || data.length === 0) {
      setError("No se encuentra la ubicación");
      setLoading(false);
      return;
    }
    return data[0];
  };

  const getForecastData = async (woeid) => {
    const { data } = await axios(`${REQUEST_URL}/${woeid}`);
    if (!data || data.length === 0) {
      setError("Algo salió mal");
      setLoading(false);
      return;
    }
    return data;
  };

  const submitRequest = async (location) => {
    setLoading(true);
    setError(false);
    const response = await getWoeid(location);
    if (!response.woeid) return;

    const data = await getForecastData(response.woeid);
    if (!data) return;

    console.log({ data });
  };

  return { isError, isLoading, forecast, submitRequest };
};

export default useForecast;
