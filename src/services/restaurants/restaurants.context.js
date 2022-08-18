import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";
import { createDataContext } from "../create.context";

const initState = {
  restaurants: [],
  isContentLoading: false,
};

const restaurantReducer = (state = initState, action) => {
  switch (action.type) {
    case "RETRIEVE_RESTAURANTS":
      return {
        ...state,
        restaurants: action.payload,
      };
    default:
      return state;
  }
};

const retrieveRestaurants = (dispatch) => async (location) => {
  const restData = await restaurantsRequest(location);
  const restaurants = restaurantsTransform(restData);
  dispatch({ type: "RETRIEVE_RESTAURANTS", payload: restaurants });
};

export const { Context, Provider } = createDataContext(
  restaurantReducer,
  { retrieveRestaurants },
  initState
);
