import React, { useState, useContext, useEffect } from "react";

import { Context as AuthContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
} from "../components/account.styles";

const RegisterScreen = ({ navigation }) => {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    navigation.addListener("focus", () => {
      setErrorMessage(null);
    });
  }, [navigation]);

  const registerHandler = async () => {
    setIsLoading(true);
    const error = await register(email, password, confirmPassword);
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
          label="Password"
          secureTextEntry
          textContentType="password"
          value={password}
          onChangeText={(pass) => {
            if (errorMessage) {
              setErrorMessage(null);
            }
            setPassword(pass);
          }}
        />
        <AuthInput
          label="Confirm Password"
          secureTextEntry
          textContentType="password"
          value={confirmPassword}
          onChangeText={(pass) => {
            if (errorMessage) {
              setErrorMessage(null);
            }
            setConfirmPassword(pass);
          }}
        />
        {errorMessage && (
          <Spacer position={"bottom"} size="medium">
            <Text variant="error">{errorMessage}</Text>
          </Spacer>
        )}
        <AuthButton loading={isLoading} onPress={registerHandler} icon="email">
          Register
        </AuthButton>
      </AccountContainer>
      <AuthButton onPress={() => navigation.pop()}>Back</AuthButton>
    </AccountBackground>
  );
};

export default RegisterScreen;
