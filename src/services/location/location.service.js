import { locations } from "./location.mock";
import camelize from "camelize";

export const locationRequest = (seachTerm) => {
  return new Promise((resolve, reject) => {
    const location = locations[seachTerm];
    if (!location) {
      reject("Not found!");
    }
    resolve(location);
  });
};

export const locationTransform = (result) => {
  const {
    geometry: { location, viewport },
  } = camelize(result.results)[0];

  const { lng, lat } = location;
  return { lat, lng, viewport };
};
