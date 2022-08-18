import { locationRequest, locationTransform } from "./location.service";
import { createDataContext } from "../create.context";

const initState = {
  lat: "",
  lgn: "",
  latDelta: 0,
  keyword: "",
};

const locationReducer = (state, action) => {
  switch (action.type) {
    case "RETRIEVE_LOCATION":
      return {
        ...state,
        lat: action.payload.location.lat,
        lng: action.payload.location.lng,
        latDelta: action.payload.location.latDelta,
        keyword: action.payload.searchKey,
      };
    default:
      return state;
  }
};

const retrieveLocation = (dispatch) => async (searchKey) => {
  if (!searchKey.length) {
    return;
  }
  searchKey = searchKey.toLowerCase();
  try {
    const locData = await locationRequest(searchKey);
    const location = locationTransform(locData);
    const { lat, lng, viewport } = location;
    const latDelta = viewport.northeast.lat - viewport.southwest.lat;
    dispatch({
      type: "RETRIEVE_LOCATION",
      payload: { location: { lat, lng, latDelta }, searchKey },
    });
  } catch (error) {
    console.log(error);
  }
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { retrieveLocation },
  initState
);
