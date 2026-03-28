//restaurants ની list બતાવે છે, loading handle કરે છે, search + favourites toggle આપે છે અને restaurant click કરતાં detail screen પર navigate કરે છે
import { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/SafeArea";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/Spacer";
import { FavouritesContext } from "../../../services/favourites/favouritesContext";
import { ActivityIndicator } from "react-native-paper";
import { Search } from "../components/SearchComponent";
import RestaurantInfo from "../components/RestaurantInfo";
import { FavouritesBar } from "../../../components/favourites/favouritesBarComponent";
import { RestaurantsContext } from "../../../services/restaurants/RestaurantsContext";
import { RestaurantList } from "../components/RestaurantInfoStyles";
import { FadeInView } from "../../../components/animations/FadeAnimation";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const [isToggled, setIsToggled] = useState(false);
  const { favourites } = useContext(FavouritesContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading
            size={50}
            style={{ marginLeft: -25 }}
            animating={true}
            color="blue"
          />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggle={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <FadeInView>
                  <RestaurantInfo restaurant={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
