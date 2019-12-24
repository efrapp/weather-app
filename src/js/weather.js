import WeatherService from './weather_service';
import PlacesService from './places_service';

function Weather() {
  const publicProto = {
    setIcon(code) {
      if(code >= 200 && code <= 299) {
        return 'wi wi-day-thunderstorm';
      } else if(code >= 300 && code <= 399){
        return 'wi wi-hail';
      } else if(code >= 500 && code <= 599){
        return 'wi wi-showers';
      } else if(code >= 600 && code <= 699){
        return 'wi wi-snow';
      } else if(code >= 700 && code <= 799){
        return 'wi wi-fog';
      } else if(code === 800){
        return 'wi wi-day-sunny';
      } else if(code >= 801 && code <= 899){
        return 'wi wi-cloudy'
      } else {
        return 'wi wi-alien';
      }
    }
  };

  const proto = Object.assign({}, WeatherService.prototype, PlacesService.prototype, publicProto);

  return Object.create(proto);
}

export default Weather;
