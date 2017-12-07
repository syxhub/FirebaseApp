// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
// The Firebase Admin SDK to access the Firebase Realtime Database.
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
const moment = require('moment');
const cors = require('cors')({ origin: true });
admin.initializeApp(functions.config().firebase);

// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


exports.logFirstLogin = functions.auth.user().onCreate(event => {
    const user = event.data; // The Firebase user.
    const email = user.email; // The email of the user.
    console.log('User with email: ' + email + ' has logged in for the first time.');
});


exports.date = functions.https.onRequest((req, res) => {
    if (req.method === 'GET') {
        res.status(403).send('ASD!');
    }
    cors(req, res, () => {
        let format = req.query.format;
        if (!format) {
            format = req.body.format;
        }
        const formattedDate = moment().format(format);
        console.log('Sending Formatted date:', formattedDate);
        res.status(200).send(formattedDate);
    });
});
