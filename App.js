import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import Navigation from "./src/infrastructure/navigation";
import { theme } from "./src/infrastructure/theme";
import { Provider as RestaurantProvider } from "./src/services/restaurants/restaurants.context";
import { Provider as LocationProvider } from "./src/services/location/location.context";
import { Provider as FavoritesProvider } from "./src/services/favorites/favorites.context";

export default function App() {
  const [oswaldLoaded] = useFonts({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationProvider>
          <RestaurantProvider>
            <FavoritesProvider>
              <Navigation />
            </FavoritesProvider>
          </RestaurantProvider>
        </LocationProvider>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
