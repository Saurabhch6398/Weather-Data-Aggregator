const axios = require("axios");

const API_KEY = process.env.API_KEY;

const getWeather = async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  return {
    source: "api",
    data: {
      city: response.data.name,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      condition: response.data.weather[0].main
    }
  };
};

module.exports = { getWeather };