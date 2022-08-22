import React, { useContext, useEffect, useState } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import CreditCardInput from "../components/credit-card.component";
import { payRequest } from "../../../services/checkout/checkout.context";
import RestaurantInfoCard from "../../restaurants/components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Context as CartContext } from "../../../services/cart/cart.context";
import { Context as AuthContext } from "../../../services/authentication/authentication.context";
import {
  CartIconContainer,
  CartIcon,
  QuantityButton,
  NameInput,
  PayButton,
  ClearButton,
} from "../components/checkout.styles";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const CheckoutScreen = () => {
  const {
    getCart,
    addToCart,
    removeItem,
    clearCart,
    state: { cartItems },
  } = useContext(CartContext);
  const {
    state: { uid },
  } = useContext(AuthContext);

  const [creditCartName, setCreditCartName] = useState();

  useEffect(() => {
    getCart(uid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onIncreaseQuantity = () => {
    addToCart(uid, cartItems[0].item, cartItems[0].restaurant);
  };
  const onDecreaseQuantity = () => {
    removeItem(uid, cartItems[0]);
  };

  const clearPressHandler = () => {
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Spacer position={"top"} size="large">
            <Text variant="body">Your cart is empty!</Text>
          </Spacer>
        </CartIconContainer>
      </SafeArea>
    );
  }
  return (
    <SafeArea>
      <KeyboardAwareScrollView>
        <RestaurantInfoCard restaurant={cartItems[0].restaurant} />
        <Spacer position={"left"} size="medium">
          <Spacer position={"top"} size={"large"}>
            <Text>Your order</Text>
          </Spacer>
          <List.Section>
            <List.Item title="Type" description={cartItems[0].item.type} />
            <List.Item
              title="Price"
              description={`$ ${cartItems[0].item.price / 100}`}
            />
            <List.Item
              title="Quantity"
              description={cartItems[0].quantity}
              right={() => (
                <>
                  <QuantityButton
                    onPress={onIncreaseQuantity}
                    color={colors.brand.primary}
                  >
                    +
                  </QuantityButton>
                  <QuantityButton
                    color={colors.brand.muted}
                    onPress={onDecreaseQuantity}
                  >
                    -
                  </QuantityButton>
                </>
              )}
            />
          </List.Section>
        </Spacer>
        <Spacer position={"left"} size="medium">
          <Text>
            Total Price: $
            {cartItems[0].quantity * (cartItems[0].item.price / 100)}
          </Text>
        </Spacer>
        <NameInput
          value={creditCartName}
          onChangeText={(text) => {
            setCreditCartName(text);
          }}
        />
        <Spacer>
          {creditCartName && <CreditCardInput name={creditCartName} />}
        </Spacer>
        <PayButton icon="cash">Pay</PayButton>
        <ClearButton onPress={clearPressHandler} icon="cart-off">
          Clear the Cart
        </ClearButton>
      </KeyboardAwareScrollView>
    </SafeArea>
  );
};

export default CheckoutScreen;
