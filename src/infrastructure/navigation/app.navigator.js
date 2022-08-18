import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import RestaurantsNavigator from "./restaurants.navigator";
import MapNavigator from "./map.navigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
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
          component={RestaurantsNavigator}
          name="Settings"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-settings" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
