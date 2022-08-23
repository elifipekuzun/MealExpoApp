import React from "react";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { CartIcon, CartIconContainer } from "../components/checkout.styles";

const CheckoutSuccessScreen = () => {
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="check-bold" />
        <Spacer position={"top"} size="large">
          <Text variant="label">Payment is completed successfully!</Text>
        </Spacer>
      </CartIconContainer>
    </SafeArea>
  );
};

export default CheckoutSuccessScreen;
