import React from "react";
import { Text, Image } from "react-native";
import styled from "styled-components/native";

import CompactRestaurantInfo from "../../../components/restaurant/compact-restaurant-info.component";

const MapCallout = ({ restaurant, onPress }) => {
  return (
    <CompactRestaurantInfo isMap restaurant={restaurant} onPress={onPress} />
  );
};

export default MapCallout;
