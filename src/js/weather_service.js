function WeatherService() {}

const API_KEY = process.env.OPENWEATHER_API_KEY;
const DEFAULT_UNITS = 'metric';
let units = DEFAULT_UNITS;

WeatherService.prototype.getInfo = async function getInfo(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${API_KEY}`;

  const response = await fetch(url, { mode: 'cors' });
  const info = await response.json();

  if (info.cod !== 200) {
    throw new Error(info.message);
  }
  return info;
};

WeatherService.prototype.setUnits = function setUnits(value) {
  units = value || DEFAULT_UNITS;
  return units;
};

export default WeatherService;
