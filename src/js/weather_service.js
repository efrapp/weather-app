function WeatherService() {}

const API_KEY = process.env.OPENWEATHER_API_KEY;

WeatherService.prototype.getInfo = async function getInfo(city) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  const response = await fetch(url, { mode: 'cors' });
  const info = await response.json();

  if (info.cod !== 200) {
    throw new Error(info.message);
  }
  return info;
};

export default WeatherService;
