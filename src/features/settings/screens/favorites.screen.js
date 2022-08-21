import React, { useContext, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { Text } from "../../../components/typography/text.component";
import { Context as FavoritesContext } from "../../../services/favorites/favorites.context";
import { Context as AuthContext } from "../../../services/authentication/authentication.context";
import RestaurantInfoCard from "../../restaurants/components/restaurant-info-card.component";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import FadeInView from "../../../components/animations/fade.animation";

const NoFavoriteContainer = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

const FavoritesScreen = ({ navigation }) => {
  const {
    state: { favorites },
    getFavorites,
  } = useContext(FavoritesContext);
  const {
    state: { userEmail },
  } = useContext(AuthContext);

  useEffect(() => {
    getFavorites(userEmail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {favorites.length === 0 ? (
        <NoFavoriteContainer>
          <Text>No favorite found!</Text>
        </NoFavoriteContainer>
      ) : (
        <RestaurantList
          keyExtractur={(item) => item.placeId}
          data={favorites}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: item,
                  })
                }
              >
                <Spacer position={"bottom"} size={"large"}>
                  <FadeInView>
                    <RestaurantInfoCard restaurant={item} />
                  </FadeInView>
                </Spacer>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </>
  );
};

export default FavoritesScreen;
