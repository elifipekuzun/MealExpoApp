import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../../features/account/screens/account.screen";
import RegisterScreen from "../../features/account/screens/register.screen";
import SigninScreen from "../../features/account/screens/signin.screen";

const AccountStack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AccountStack.Screen name="Main" component={AccountScreen} />
      <AccountStack.Screen name="Signin" component={SigninScreen} />
      <AccountStack.Screen name="Register" component={RegisterScreen} />
    </AccountStack.Navigator>
  );
};

export default AccountNavigator;
