var FirebaseClient = require('./firebase'),
    firebase = new FirebaseClient("test");

firebase.add(Math.random());

