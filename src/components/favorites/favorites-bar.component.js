import React, { useContext, useEffect } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { Context as FavoritesContext } from "../../services/favorites/favorites.context";
import CompactRestaurantInfo from "../restaurant/compact-restaurant-info.component";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";

const FavoritesBar = () => {
  const {
    state: { favorites },
    getFavorites,
  } = useContext(FavoritesContext);

  const StyledView = styled.View`
    padding: 10px;
  `;
  const navigation = useNavigation();
  useEffect(() => {
    getFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledView>
      <Spacer position={"left"} size={"large"}>
        {favorites.length === 0 ? (
          <Text variant={"body"}>No favorites yet!</Text>
        ) : (
          <Text variant={"body"}>Favorites</Text>
        )}
      </Spacer>
      <ScrollView
        horizontal
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        {favorites.map((fav, i) => {
          return (
            <Spacer key={i} position={"left"} size={"medium"}>
              <CompactRestaurantInfo
                restaurant={fav}
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant: fav })
                }
              />
            </Spacer>
          );
        })}
      </ScrollView>
    </StyledView>
  );
};

export default FavoritesBar;
