/* flow */
import Cookies from "@walmart/electrode-cookies";
import { Geolocate } from "@walmart/geolocate";

const geolocate = new Geolocate();

const STORE_FINDER_PAGE_URL = "/store/finder";
const LOCATION_COOKIE_NAME = "DL";

export const getStoreFinderUrl = (location: string) => {
  return location ? `${STORE_FINDER_PAGE_URL}?location=${location}`
    : STORE_FINDER_PAGE_URL;
};

export const formatPosition = ({ coords }) => {
  if (coords) {
    const { latitude, longitude } = coords;
    if (latitude && longitude) {
      return { latitude, longitude };
    }
  }
};

export const getLocation = () => {
  const locationFromCookie = Cookies.get(LOCATION_COOKIE_NAME);
  return new Promise((resolve, reject) => {
    if (locationFromCookie) {
      resolve(null);
    } else {
      geolocate.getCurrentLocation().then((position) => {
        resolve(formatPosition(position));
      }).catch((err) => {
        reject(err);
      });
    }
  });
};
