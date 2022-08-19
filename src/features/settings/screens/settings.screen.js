import React, { useContext } from "react";

import { Context as AuthContext } from "../../../services/authentication/authentication.context";
import {
  AuthButton,
  AccountContainer,
} from "../../account/components/account.styles";

const SettingsScreen = () => {
  const { logout } = useContext(AuthContext);

  const logoutHandler = () => {
    logout();
  };
  return (
    <AccountContainer>
      <AuthButton onPress={logoutHandler}>Logout</AuthButton>
    </AccountContainer>
  );
};

export default SettingsScreen;
