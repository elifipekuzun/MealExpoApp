const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const stripeClient = require("stripe")(
  "sk_test_51LZGVlBuU8KN4jnWSidP1xdxUatzmzqKDjOzd0ZhCEW6kTh7DDPxEdbVcIGU3AKTBmDqpw5z7Vn23nsSWSquTPHg00BO6jnSmm"
);

exports.pay = functions.https.onRequest((req, res) => {
  const { token, amount } = JSON.parse(req.body);
  stripeClient.paymentIntents
    .create({
      amount,
      currency: "USD",
      payment_method_types: ["card"],
      payment_method_data: {
        type: "card",
        card: {
          token,
        },
      },
      confirm: true,
    })
    .then((paymentIntent) => {
      res.json(paymentIntent);
    })
    .catch((err) => {
      console.log(err);
      res.status(400);
      res.send("Something went wrong with your payment!");
    });
});
