import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { Context as FavoritesContext } from "../../services/favorites/favorites.context";
import { Context as AuthContext } from "../../services/authentication/authentication.context";

const Favorite = ({ restaurant }) => {
  const FavoriteContainer = styled(TouchableOpacity)`
    position: absolute;
    right: 25px;
    margin-top: 25px;
    z-index: 9;
  `;
  const {
    add,
    remove,
    state: { favorites },
  } = useContext(FavoritesContext);
  const {
    state: { userEmail },
  } = useContext(AuthContext);

  const isFavorite = favorites.find(
    (fav) => fav.placeId === restaurant.placeId
  );

  return (
    <FavoriteContainer
      onPress={() =>
        !isFavorite
          ? add(userEmail, restaurant)
          : remove(userEmail, restaurant.placeId)
      }
    >
      <Ionicons
        name={isFavorite ? "heart" : "heart-outline"}
        size={28}
        color={isFavorite ? "red" : "white"}
      />
    </FavoriteContainer>
  );
};

export default Favorite;
