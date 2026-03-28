//👉 RestaurantsService mock data પરથી restaurants fetch કરે છે અને RestaurantsTransform તેને clean, camelCase અને random images સાથે proper format માં convert કરે છે
import { mocks, mockImages } from "../mock";
import camelize from "camelize";

export const RestaurantsService = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
// export const RestaurantsTransform = ({ results = [] }) => {
//   const mappedResults = results.map((restaurant) => {
//     restaurant.photos = restaurant.photos.map(() => {
//       return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
//     });
//     return {
//       ...restaurant,
//       address: restaurant.address,
//       isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
//       isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
//     };
//   });

//   return camelize(mappedResults);
// };

export const RestaurantsTransform = ({ results = [] }) => {
  return camelize(
    results.map((restaurant) => {
      const randomPhotos = restaurant.photos.map(() => {
        const randomIndex = Math.floor(Math.random() * mockImages.length);
        return mockImages[randomIndex];
      });

      return {
        ...restaurant,
        photos: randomPhotos,
        address: restaurant.address,
        isOpenNow: restaurant.opening_hours?.open_now || false,
        isClosedTemporarily:
          restaurant.business_status === "CLOSED_TEMPORARILY",
      };
    }),
  );
};
