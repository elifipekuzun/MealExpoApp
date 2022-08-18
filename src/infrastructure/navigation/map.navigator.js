import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MapScreen from "../../features/map/screens/map.screen";

const MapStack = createStackNavigator();

const MapNavigator = () => {
  return (
    <MapStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MapStack.Screen component={MapScreen} name={"map"} />
    </MapStack.Navigator>
  );
};

export default MapNavigator;
