import { createDataContext } from "../create.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initState = {
  cartItems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "GET":
      return state;
    case "ADD":
      const items = state.cartItems;
      let updatedCarItems = items;
      if (updatedCarItems.length !== 0) {
        let item = updatedCarItems.find(
          (i) => i.restaurant.placeId === action.payload.restaurant.placeId
        );
        if (item) {
          item = {
            item: action.payload.item,
            quantity: item.quantity + 1,
            restaurant: action.payload.restaurant,
          };
          updatedCarItems = updatedCarItems.filter(
            (i) => i.restaurant.placeId !== action.payload.restaurant.placeId
          );
          updatedCarItems = [...updatedCarItems, item];
        } else {
          updatedCarItems = [
            {
              item: action.payload.item,
              quantity: 1,
              restaurant: action.payload.restaurant,
            },
          ];
        }
      } else {
        updatedCarItems = [
          {
            item: action.payload.item,
            quantity: 1,
            restaurant: action.payload.restaurant,
          },
        ];
      }

      return {
        ...state,
        cartItems: updatedCarItems,
      };
    case "CLEAR":
      return {
        cartItems: [],
      };
    case "REMOVE":
      let item = state.cartItems[0];
      item.quantity = item.quantity - 1;
      if (item.quantity === 0) {
        return {
          cartItems: [],
        };
      }
      return {
        cartItems: [item],
      };
    default:
      return state;
  }
};

const getCart = (dispatch) => (uid) => {
  dispatch({ type: "GET" });
};

const addToCart = (dispatch) => (uid, item, restaurant) => {
  dispatch({ type: "ADD", payload: { item, restaurant } });
};

const removeItem = (dispatch) => (uid, item) => {
  dispatch({ type: "REMOVE", payload: { item } });
};

const clearCart = (dispatch) => () => {
  dispatch({ type: "CLEAR" });
};

export const { Context, Provider } = createDataContext(
  cartReducer,
  { getCart, addToCart, removeItem, clearCart },
  initState
);
