import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import RestaurantsNavigator from "./restaurants.navigator";
import MapNavigator from "./map.navigator";
import SettingsNavigator from "./settings.navigator";
import { Provider as FavoritesProvider } from "../../services/favorites/favorites.context";
import { Provider as LocationProvider } from "../../services/location/location.context";
import { Provider as RestaurantProvider } from "../../services/restaurants/restaurants.context";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <FavoritesProvider>
      <LocationProvider>
        <RestaurantProvider>
          <Tab.Navigator
            screenOptions={() => ({
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
              headerShown: false,
            })}
          >
            <Tab.Screen
              component={RestaurantsNavigator}
              name="restaurants"
              options={{
                tabBarIcon: ({ size, color }) => (
                  <Ionicons name="md-restaurant" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              component={MapNavigator}
              name="Map"
              options={{
                tabBarIcon: ({ size, color }) => (
                  <Ionicons name="md-map" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              component={SettingsNavigator}
              name="Settings"
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="md-settings" size={size} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </RestaurantProvider>
      </LocationProvider>
    </FavoritesProvider>
  );
};

export default AppNavigator;
