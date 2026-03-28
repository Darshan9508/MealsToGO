//👉 LocationService = mock data માંથી location fetch કરે છે અને તેને clean (camelCase) કરીને lat, lng અને viewport માં convert કરે છે
import camelize from "camelize";
import { locations } from "../mock/LocationMock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
