//RestaurantsScreen અને RestaurantDetailScreen વચ્ચે navigation (stack flow) handle કરે છે સાથે smooth screen transition આપે છે
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/RestaurantsScreen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/RestaurantDetailScreen";
const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
        gestureEnabled: true,
        gestureDirection: "vertical",
      }}
    >
      <RestaurantStack.Screen
        name="RestaurantsScreen"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
