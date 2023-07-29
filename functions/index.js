const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
    ('sk_test_51IqHN0SEvEh1JNN3xO714lxv5Pe9Bp4gupp9E4jGB2GprDjbv6oU6riQ7PV0lilOutBxP5TPLEzq0FKfYmcednoJ00z8yR6FKB')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// - API

// - APP CONFIG
const app = express();

// - MIDDLEWARES
app.use(cors({ origin: true }));
app.use(express.json());

// - API ROUTES
app.get('/', (request, response) => response.status(200).send('Hello World'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received for => ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "INR"
    });

    //ok created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - LISTEN COMMAND
exports.api = functions.https.onRequest(app)

//EXAMPLE ENDPOINT 
//http://localhost:5001/challenge-79ced/us-central1/api