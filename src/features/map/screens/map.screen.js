import React, { useContext } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";

import Search from "../components/search.component";
import { Context as RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Context as LocationContext } from "../../../services/location/location.context";
import MapCallout from "../components/map-callout.component";

const MapScreen = ({ navigation }) => {
  const Map = styled(MapView)`
    flex: 1;
  `;

  const {
    state: { restaurants },
  } = useContext(RestaurantContext);

  const {
    state: { lat, lng, latDelta },
  } = useContext(LocationContext);

  const initRagion = {
    latitude: lat,
    longitude: lng,
    latitudeDelta: latDelta * 0.4,
    longitudeDelta: 0.02,
  };
  return (
    <>
      <Search />
      <Map region={initRagion}>
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
              title={restaurant.name}
            >
              <MapView.Callout>
                <MapCallout
                  restaurant={restaurant}
                  onPress={() =>
                    navigation.navigate("RestaurantDetail", { restaurant })
                  }
                />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};

export default MapScreen;
