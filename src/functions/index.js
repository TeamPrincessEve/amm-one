'use strict';

const sc = require('./server-const');
const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.adslist = functions.https.onRequest((req, res) => {
  if (req.method === 'PUT') {
    res.status(sc.codeForbidden).send(sc.msgForbidden);
  }
  cors(req, res, () => {
    res.set({'AMP-Access-Control-Allow-Source-Origin': '<%- site.host %>' }).status(sc.codeSuccess).json({
      "items": [
      {
      "title": "AMP YouTube Channel",
      "url": "https://www.youtube.com/channel/UCXPBsjgKKG2HqsKBhWA4uQw"
      },
      {
      "title": "AMPproject.org",
      "url": "https://www.ampproject.org/"
      },
      {
      "title": "AMP By Example",
      "url": "https://ampbyexample.com/"
      },
      {
      "title": "AMP Start",
      "url": "https://ampstart.com/"
      }
      ]
    });
  });


});

// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// // Take the text parameter passed to this HTTP endpoint and insert it into the
// // Realtime Database under the path /messages/:pushId/original
// exports.addMessage = functions.https.onRequest((req, res) => {
//   // Grab the text parameter.
//   const original = req.query.text;
//   // Push the new message into the Realtime Database using the Firebase Admin SDK.
//   admin.database().ref('/messages').push({original: original}).then(snapshot => {
//     // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
//     res.redirect(303, snapshot.ref);
//   });
// });

// exports.ccSearch = functions.https.onRequest((req, res) => {
//   if (req.method == "POST") {
//     //const t = req.query.t;
//     const t = req.body.t;
//     admin.database().ref('tags/'+t).once('value').then(function(snapshot) {
//       var cl = snapshot.val();
//       var ar = [];
//       for (var al in cl) {
//         ar.push(al);
//       }
//       const br = ar.map(id => { return admin.database().ref('cclist/'+id).once('value').then(snapshot => {return snapshot.val()}) })
//       Promise.all(br).then(dl => {
//         res.status(200).json({result: dl });
//       })

//     });
//   }

// });