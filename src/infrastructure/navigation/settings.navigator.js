import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import SettingsScreen from "../../features/settings/screens/settings.screen";
import FavoritesScreen from "../../features/settings/screens/favorites.screen";
import CameraScreen from "../../features/settings/screens/camera.screen";

const SettingsStack = createStackNavigator();

const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        component={SettingsScreen}
        name="settings"
        options={{ headerShown: false, headerTitle: "Settings" }}
      />
      <SettingsStack.Screen component={FavoritesScreen} name="Favorites" />
      <SettingsStack.Screen
        component={CameraScreen}
        name="Camera"
        options={{ headerShown: false }}
      />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
