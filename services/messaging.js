const admin = require('firebase-admin');


const credentials = JSON.parse(process.env.FIREBASE_ACCOUNT_KEY);


if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(credentials),
  });
}

module.exports = {
  sendNotification(data, tokens){
    admin.messaging().sendMulticast({
      data,
      tokens: tokens,
      android: { priority: 'high' },
    });
  },
}
