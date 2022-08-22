import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Button } from "react-native-paper";

import { colors } from "../../../infrastructure/theme/colors";

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const OrderButton = styled(Button).attrs({
  mode: "contained",
  color: colors.brand.primary,
})`
  width: 80%;
  padding: 8px 0;
  align-self: center;
`;
