import styled from "styled-components/native";
import {
  Avatar,
  Button,
  TextInput,
  ActivityIndicator,
  Colors,
} from "react-native-paper";

import { colors } from "../../../infrastructure/theme/colors";

export const CartIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${(props) => props.bg || props.theme.colors.brand.primary};
`;

export const QuantityButton = styled(Button).attrs({
  mode: "contained",
})`
  margin-right: 3px;
  justify-content: center;
`;

export const NameInput = styled(TextInput).attrs({
  placeholder: "Credit Cart Name",
  activeUnderlineColor: colors.brand.primary,
  autoCorrect: false,
  autoCapitalize: "none",
})`
  margin: ${(props) => props.theme.space[3]};
`;

export const PayButton = styled(Button).attrs({
  color: colors.brand.primary,
  mode: "contained",
})`
  width: 80%;
  align-self: center;
  padding: 6px;
  margin-bottom: 10px;
  margin-top: 30px;
`;

export const ClearButton = styled(Button).attrs({
  color: colors.ui.error,
  mode: "contained",
})`
  width: 80%;
  align-self: center;
  margin-bottom: 40px;
  padding: 6px;
`;

export const PaymentProcessing = styled(ActivityIndicator).attrs({
  animating: true,
  color: Colors.blue300,
  size: 128,
})`
  position: absolute;
  top: 50%;
  left: 35%;
  z-index: 999;
`;
