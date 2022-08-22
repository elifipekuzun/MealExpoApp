import createStripe from "stripe-client";
import { localHost } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51LZGVlBuU8KN4jnWNL0jb0teFV0AKfxavvcrxLn1rm22Jx0mkEvrNOVkR94K7VGRpxV7PZQAFHLVSnIu5UACJhDw00esrsZzJK"
);

export const cardTokenRequest = async (cardInfo) => {
  const info = await stripe.createToken({ card: cardInfo });
  return info;
};

export const payRequest = (token, amount, name) => {
  return fetch(`${localHost}/pay`, {
    method: "POST",
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
  }).then((response) => {
    if (response.status !== 200) {
      return Promise.reject("Something went wrong processing your payment!");
    }
    return response.json();
  });
};
