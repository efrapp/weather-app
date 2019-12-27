import WeatherService from './weather_service';
import PlacesService from './places_service';

function Weather(state) {
  const { units } = state;

  const publicProto = {
    setIcon(code) {
      if (code >= 200 && code <= 299) {
        return 'wi wi-day-thunderstorm';
      } if (code >= 300 && code <= 399) {
        return 'wi wi-hail';
      } if (code >= 500 && code <= 599) {
        return 'wi wi-showers';
      } if (code >= 600 && code <= 699) {
        return 'wi wi-snow';
      } if (code >= 700 && code <= 799) {
        return 'wi wi-fog';
      } if (code === 800) {
        return 'wi wi-day-sunny';
      } if (code >= 801 && code <= 899) {
        return 'wi wi-cloudy';
      }

      return 'wi wi-alien';
    },
    setUnits(value) {
      this.units = WeatherService.prototype.setUnits(value);

      return this;
    },
  };

  const proto = Object.assign({}, WeatherService.prototype, PlacesService.prototype, publicProto);
  const obj = Object.assign(Object.create(proto), { units });

  obj.setUnits(units);

  return obj;
}

export default Weather;
