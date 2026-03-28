//👉 MapCallout = map marker પર restaurant નું small preview (CompactRestaurantInfo) બતાવતું component
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info-components";
export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);
