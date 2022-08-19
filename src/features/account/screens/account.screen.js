import React from "react";
import LottiView from "lottie-react-native";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from "../components/account.styles";

const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottiView
          resizeMode="cover"
          autoPlay
          key={"animation"}
          loop
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
      <Title>Meals App</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          onPress={() => navigation.navigate("Signin")}
        >
          Login
        </AuthButton>
        <AuthButton
          icon="email"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};

export default AccountScreen;
