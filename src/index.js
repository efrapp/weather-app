import PlacesService from './js/places_service';

const imgUrlPms = PlacesService.prototype.getCityUrl({ lat: 3.451952, lng: -76.530210 });
imgUrlPms.then((imgUrl) => {
  const bgImage = document.getElementById('bg-image');
  bgImage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${imgUrl}')`;
})
  .catch(alert);
document.addEventListener('DOMContentLoaded', () => {
  // PlacesService.prototype.getCityImage('Medellin');
});
