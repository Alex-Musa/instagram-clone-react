import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyALmnH5vdh12jC5-OftemfXQNfRRPYg6ts",
    authDomain: "instgram-clone-react.firebaseapp.com",
    databaseURL: "https://instgram-clone-react.firebaseio.com",
    projectId: "instgram-clone-react",
    storageBucket: "instgram-clone-react.appspot.com",
    messagingSenderId: "452155641741",
    appId: "1:452155641741:web:d5207f1ba30c715e0477c4",
    measurementId: "G-RH12L8Z4VT"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage}