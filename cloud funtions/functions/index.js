const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const stripeClient = require("stripe")(
  "sk_test_51LZGVlBuU8KN4jnWSidP1xdxUatzmzqKDjOzd0ZhCEW6kTh7DDPxEdbVcIGU3AKTBmDqpw5z7Vn23nsSWSquTPHg00BO6jnSmm"
);

exports.pay = functions.https.onRequest((req, res) => {
  console.log(stripeClient);
  res.send("Payments!");
});
