function WeatherService() {}

const API_KEY = 'd00af94a1ef0884960da78605292d459';

WeatherService.prototype.getInfo = async function getInfo(city) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const response = await fetch(url, { mode: 'cors' });
  const info = await response.json();

  if (info.cod !== 200) {
    throw new Error(info.message);
  }
  return info;
};

export default WeatherService;
