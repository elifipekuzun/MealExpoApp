import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CheckoutScreen from "../../features/checkout/screens/checkout.screen";
import CheckoutErrorScreen from "../../features/checkout/screens/checkout-error.screen";
import CheckoutSuccessScreen from "../../features/checkout/screens/checkout-success.screen";

const CheckoutStack = createStackNavigator();

const CheckoutNavigator = () => {
  return (
    <CheckoutStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <CheckoutStack.Screen component={CheckoutScreen} name="checkout" />
      <CheckoutStack.Screen
        component={CheckoutSuccessScreen}
        name="checkoutSuccess"
      />
      <CheckoutStack.Screen
        component={CheckoutErrorScreen}
        name="checkoutError"
      />
    </CheckoutStack.Navigator>
  );
};

export default CheckoutNavigator;
