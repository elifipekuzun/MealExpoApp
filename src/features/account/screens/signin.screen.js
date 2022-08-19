import React, { useState, useContext, useEffect } from "react";

import { Context as AuthContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
} from "../components/account.styles";

const SigninScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    navigation.addListener("focus", () => {
      setErrorMessage(null);
    });
  }, [navigation]);

  const loginHandler = async () => {
    setIsLoading(true);
    const error = await login(email, password);
    setIsLoading(false);
    if (error) {
      return setErrorMessage(error);
    }
  };

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={(text) => {
            if (errorMessage) {
              setErrorMessage(null);
            }
            setEmail(text);
          }}
        />
        <AuthInput
          secureTextEntry
          label="Password"
          textContentType="password"
          value={password}
          onChangeText={(text) => {
            if (errorMessage) {
              setErrorMessage(null);
            }
            setPassword(text);
          }}
        />
        {errorMessage && (
          <Spacer position={"bottom"} size={"medium"}>
            <Text variant="error">{errorMessage}</Text>
          </Spacer>
        )}
        <AuthButton
          loading={isLoading}
          onPress={loginHandler}
          icon="lock-open-outline"
        >
          Login
        </AuthButton>
      </AccountContainer>
      <AuthButton onPress={() => navigation.pop()}>Back</AuthButton>
    </AccountBackground>
  );
};

export default SigninScreen;
