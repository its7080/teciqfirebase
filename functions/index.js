const functions = require('firebase-functions');
const express = require('express');
const { request, response } = require('express');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const app = express();
app.get('/timestamp', (request, response) => {
    response.send(`${Date.now()}`);
});

exports.app = functions.https.onRequest(app);