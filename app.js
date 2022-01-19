var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

var token = ['Copypaste the device token here']
var payload = {
    notification: {
        title: "DocBot notification",
        body: `Hello mr ${name_of_user}`,
    }
}
var options =
{
    timeToLive: 60 * 60
}
admin.messaging().sendToDevice(token, payload, options)
    .then(function (response) {
        console.log("Successfully sent the message", response);
    }).catch(function (err) {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
    })
