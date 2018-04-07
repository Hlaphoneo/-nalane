const functions = require('firebase-functions');
const cors = require('cors')({
  origin: true
});

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

/*
  uscp - user signup create profile
  This functions is called after fibase user Sign up
  It creates a user profile in the database
*/

exports.uscp = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', "*") //Allow cross origin access
  let userData = JSON.parse(req.body);
  admin.database().ref('/users/'+userData.uid).update({
        'name' : userData.fullname,
        'email': userData.email,
        'phone': userData.phone,
        'uid'  : userData.uid
      });
  res.status(200) //server response, avoiding timeout
  res.send();
});

exports.PushNotify = functions.database.ref('Announcements-nalane2018')
    .onCreate((snapshot, context) => {
      // Grab the current value of what was written to the Realtime Database.
      const original = snapshot.val();
      console.log(context.params.message)

    });
