import Weather from './js/weather';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

document.addEventListener('DOMContentLoaded', () => {
  const weatherSearchBox = document.getElementById('weather-search-box');
  const checkWeatherBtn = weatherSearchBox.querySelector('button');
  const weatherObj = Weather();

  checkWeatherBtn.addEventListener('click', () => {
    const cityNameInput = weatherSearchBox.querySelector('input');
    const weatherPromise = weatherObj.getInfo(cityNameInput.value);

    dayjs.extend(advancedFormat);

    weatherPromise
      .then((weatherInfo) => {
        console.log(weatherInfo);
        const placeEl = document.querySelector('.place');
        const tempEl = document.querySelector('.temperature span');
        const climateEl = document.querySelector('.weather-condition');
        const dateEl = document.querySelector('.date');
        const iconEl = document.querySelector('.weather-icon i');

        tempEl.textContent = `${Math.round(weatherInfo.main.temp)}°`;
        placeEl.textContent = `${weatherInfo.name}, ${weatherInfo.sys.country}`;
        climateEl.textContent = weatherInfo.weather[0].main;
        dateEl.textContent = dayjs(new Date()).format('Do MMM');
        iconEl.className = weatherObj.setIcon(weatherInfo.weather[0].id);

        return weatherInfo;
      })
      .then((weatherInfo) => {
        const imgUrlPms = weatherObj.getCityUrl({
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
  });
});
