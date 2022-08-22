import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CheckoutScreen from "../../features/checkout/screens/checkout.screen";

const CheckoutStack = createStackNavigator();

const CheckoutNavigator = () => {
  return (
    <CheckoutStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <CheckoutStack.Screen component={CheckoutScreen} name="checkout" />
    </CheckoutStack.Navigator>
  );
};

export default CheckoutNavigator;
