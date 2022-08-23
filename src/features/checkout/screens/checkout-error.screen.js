import React from "react";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { CartIcon, CartIconContainer } from "../components/checkout.styles";
import { colors } from "../../../infrastructure/theme/colors";

const CheckoutErrorScreen = ({ route }) => {
  const { error = "" } = route.params;
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="close" bg={colors.ui.error} />
        <Spacer position={"top"} size="large">
          <Text variant="label">{error}</Text>
        </Spacer>
      </CartIconContainer>
    </SafeArea>
  );
};

export default CheckoutErrorScreen;
