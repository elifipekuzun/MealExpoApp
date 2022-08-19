import React, { useContext, useEffect } from "react";
import AppNavigator from "./app.navigator";
import { NavigationContainer } from "@react-navigation/native";

import AccountNavigator from "./account.navigator";

import { Context as AuthContext } from "../../services/authentication/authentication.context";

const Navigation = () => {
  const {
    state: { isAuthenticated },
    setUser,
  } = useContext(AuthContext);

  useEffect(() => {
    setUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
