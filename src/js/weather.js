import WeatherService from './weather_service';
import PlacesService from './places_service';

function Weather() {
  const proto = Object.assign({}, WeatherService.prototype, PlacesService.prototype);

  return Object.create(proto);
}

export default Weather;
