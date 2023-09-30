const admin = require('../firebase-admin');

const serviceAccount = require('../config/fnServiceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// helper function graphql auth

//helper function rest auth

