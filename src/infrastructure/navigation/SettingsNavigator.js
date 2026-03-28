import React from "react";
import { SettingsScreen } from "../../features/settings/screens/settingsScreen";
import { FavouritesScreen } from "../../features/settings/screens/FavouritesScreen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/RestaurantDetailScreen";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="SettingsScreen"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
      <SettingsStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </SettingsStack.Navigator>
  );
};
