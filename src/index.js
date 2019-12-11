import PlacesService from './js/places_service';
import WeatherService from './js/weather_service';

const weatherPromise = WeatherService.prototype.getInfo('Barranquilla');

weatherPromise.then((weatherInfo) => weatherInfo)
  .then((weatherInfo) => {
    const imgUrlPms = PlacesService.prototype.getCityUrl({
      lat: weatherInfo.coord.lat,
      lng: weatherInfo.coord.lon,
    });
    return imgUrlPms;
  })
  .then((imgUrl) => {
    const bgImage = document.getElementById('bg-image');
    bgImage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${imgUrl}')`;
  })
  .catch(alert);
