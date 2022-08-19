import { ImageBackground } from "react-native";
import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";

import { Text } from "../../../components/typography/text.component";
import { colors } from "../../../infrastructure/theme/colors";

export const AccountBackground = styled(ImageBackground).attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const Title = styled(Text)`
  font-size: 30px;
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
  mode: "contained",
})`
  margin-bottom: 10px;
  padding: ${(props) => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput).attrs({
  mode: "flat",
  activeUnderlineColor: colors.brand.primary,
  autoCapitalize: "none",
  autoCorrect: false,
})`
  width: 300px;
  margin-bottom: 10px;
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;
