import GoogleMapsLoader from 'google-maps';

GoogleMapsLoader.KEY = process.env.GOOGLE_MAPS_API_KEY;
GoogleMapsLoader.LIBRARIES = ['places'];
GoogleMapsLoader.VERSION = '3.39';

function PlacesService() {}

PlacesService.prototype.getCityUrl = async function getCityUrl(coord) {
  const { lat, lng } = coord;
  const imgUrlPromise = new Promise((resolve, reject) => {
    GoogleMapsLoader.load((google) => {
      const city = { lat, lng };

      const map = new google.maps.Map(document.getElementById('map'), {
        center: city,
        zoom: 15,
      });

      const request = {
        location: city,
        type: 'cities',
      };

      const service = new google.maps.places.PlacesService(map);
      service.textSearch(request, (result, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          if (result[0].photos) {
            resolve(result[0].photos[0].getUrl());
          } else {
            resolve('../src/img/default-img.jpg');
          }
        } else {
          reject(status);
        }
      });
    });
  });

  try {
    const imgUrl = await imgUrlPromise;
    return imgUrl;
  } catch (reason) {
    throw new Error(reason);
  }
};

export default PlacesService;
