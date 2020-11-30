const functions = require('firebase-functions');
const admin = require('firebase-admin')

exports.addAdminRole= functions.https.onCall((data,context)=>{
  return admin.auth().getUserByEmail(data.email).then (user=> {
      return admin.auth().setCustomUserClaims(
          user.id,{ admin:true}
      )
  }).then(()=>{
      return {message:`Success ${data.email} is an admin`}
  }).catch((error)=> alert(error))
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
