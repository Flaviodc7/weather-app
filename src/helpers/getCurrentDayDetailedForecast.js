const getCurrentDayForecast = (data) => [
  {
    name: "predictibilidad",
    value: data.predictability,
    unit: "%",
  },
  {
    name: "humedad",
    value: data.humidity,
    unit: "%",
  },
  {
    name: "viento",
    value: Math.round(data.wind_speed),
    unit: "km/h",
  },
  {
    name: "presión aerea",
    value: data.air_pressure,
    unit: "mb",
  },
  {
    name: "temperatura máxima",
    value: Math.round(data.max_temp),
    unit: "°C",
  },
  {
    name: "temperatura mínima",
    value: Math.round(data.min_temp),
    unit: "°C",
  },
];

export default getCurrentDayForecast;
