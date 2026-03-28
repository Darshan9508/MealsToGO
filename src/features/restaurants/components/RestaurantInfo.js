//restaurant નો full card UI બતાવે છે (image, name, rating, open/close status, address + favourite button)
import star from "../../../../assets/star";
import { SvgXml } from "react-native-svg";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/Spacer";
import { Favourite } from "../../../components/favourites/favouritesComponent";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "../../../features/restaurants/components/RestaurantInfoStyles";
import { Text } from "../../../components/typography/text";

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/cozy-dining-experience-in-modern-restaurant-ISr-sWW2nZR05CwibOqkf.webp",
    ],
    address,
    isOpenNow = true,
    rating,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />

      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfo;
