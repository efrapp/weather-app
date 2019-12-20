import Weather from './js/weather';

document.addEventListener('DOMContentLoaded', () => {
  const weatherSearchBox = document.getElementById('weather-search-box');
  const checkWeatherBtn = weatherSearchBox.querySelector('button');
  const weatherObj = Weather();

  checkWeatherBtn.addEventListener('click', () => {
    const cityNameInput = weatherSearchBox.querySelector('input');
    const weatherPromise = weatherObj.getInfo(cityNameInput.value);

    weatherPromise
      .then((weatherInfo) => weatherInfo)
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
