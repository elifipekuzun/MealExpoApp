import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";

import { cardTokenRequest } from "../../../services/checkout/checkout.context";

const CreditCardInput = ({ name = "Elif Ipek" }) => {
  const onChange = async (formData) => {
    const { values, status } = formData;
    const isIncomplete = Object.values(status).includes("incomplete");
    const expiry = values.expiry.split("/");

    const card = {
      number: values.number,
      cvc: values.cvc,
      exp_month: expiry[0],
      exp_year: expiry[1],
      name: name,
    };
    const info = await cardTokenRequest(card);
  };
  return <LiteCreditCardInput onChange={onChange} />;
};

export default CreditCardInput;
