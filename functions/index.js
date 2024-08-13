const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { setGlobalOptions } = require("firebase-functions/v2/options");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();

setGlobalOptions({ maxInstances: 10 });

app.use(cors({ origin: true }));

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success!",
  });
});

app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total);

  try {
    if (total > 0) {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
      });
      console.log(paymentIntent);

      res.status(201).json({
        clientSecret: paymentIntent.client_secret,
      });
    } else {
      res.status(400).json({
        message: "Total must be greater than 0",
      });
    }
  } catch (error) {
    console.error("Error creating payment intent:", error.message);
    res.status(500).json({
      error: "Error creating payment intent",
    });
  }
});

exports.api = onRequest(app);
