import { createDataContext } from "../create.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  favorites: [],
};

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "GET":
      return {
        ...state,
        favorites: action.payload,
      };
    case "ADD":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE":
      const id = action.payload;
      const updatedFavorites = state.favorites.filter(
        (fav) => fav.placeId !== id
      );
      return {
        ...state,
        favorites: updatedFavorites,
      };
    default:
      return state;
  }
};

const getFavorites = (dispatch) => async () => {
  const favoritesData = await AsyncStorage.getItem("favorites");
  const favorites = JSON.parse(favoritesData);
  dispatch({ type: "GET", payload: favorites });
};

const add = (dispatch) => async (restaurant) => {
  const favoritesJson = await AsyncStorage.getItem("favorites");
  let favorites = [];
  if (favoritesJson) {
    favorites = JSON.parse(favoritesJson);
  }
  favorites = [...favorites, restaurant];
  await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
  dispatch({ type: "ADD", payload: restaurant });
};

const remove = (dispatch) => async (placeId) => {
  const favoriteData = await AsyncStorage.getItem("favorites");
  let favorites = [];
  if (favoriteData) {
    favorites = JSON.parse(favoriteData);
  }
  favorites = favorites.filter((fav) => fav.placeId !== placeId);
  await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
  dispatch({ type: "REMOVE", payload: placeId });
};

export const { Context, Provider } = createDataContext(
  favoritesReducer,
  { add, remove, getFavorites },
  initialState
);