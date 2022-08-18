import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";
import RestaurantDetailScreen from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen
        component={RestaurantsScreen}
        name={"Restaurants"}
      />
      <RestaurantStack.Screen
        component={RestaurantDetailScreen}
        name={"RestaurantDetail"}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
