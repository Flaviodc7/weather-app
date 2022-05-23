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
      setError("No se encuentra la ubicacón");
      return;
    }
    return data;
  };

  const getForecastData = async (woeid) => {
    const { data } = await axios(`${REQUEST_URL}/${woeid}`);
    return response.data;
  };

  const submitRequest = async (location) => {
    const data = await getWoeid(location);

    const response = await getForecastData(data[0].woeid);
  };

  return isError, isLoading, forecast;
};

export default useForecast;
