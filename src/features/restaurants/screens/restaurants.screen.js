import React, { useContext, useState, useEffect } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ActivityIndicator, Colors } from "react-native-paper";

import RestaurantInfo from "../components/restaurant-info-card.component";
import FavoritesBar from "../../../components/favorites/favorites-bar.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import Search from "../components/search.component";
import { Context as RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Context as LocationContext } from "../../../services/location/location.context";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestaurantsScreen = ({ navigation }) => {
  const {
    state: { restaurants },
    retrieveRestaurants,
  } = useContext(RestaurantContext);

  const {
    state: { lat, lng },
  } = useContext(LocationContext);

  const [fetchedRests, setFetchedRests] = useState([]);
  const [isIconPress, setIsIconPressed] = useState(false);

  useEffect(() => {
    if (lat && lng) {
      setFetchedRests([]);
      retrieveRestaurants(`${lat},${lng}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lng]);

  useEffect(() => {
    setTimeout(() => {
      setFetchedRests(restaurants);
    }, 1500);
  }, [restaurants]);

  return (
    <SafeArea>
      <Search
        onIconPress={() => setIsIconPressed(!isIconPress)}
        isIconPressed={isIconPress}
      />
      {isIconPress && <FavoritesBar />}
      {fetchedRests.length === 0 && (
        <ActivityIndicator
          ranimating={true}
          color={Colors.red300}
          size={"large"}
          style={{ flex: 1 }}
        />
      )}
      <>
        <RestaurantList
          keyExtractor={(item) => item.name}
          data={fetchedRests}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position={"bottom"} size={"large"}>
                <RestaurantInfo restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          )}
        />
      </>
    </SafeArea>
  );
};

export default RestaurantsScreen;
