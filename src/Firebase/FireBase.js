import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB7v17dX1OrCgXZbxrZjCWENAuMAjth42M",
  authDomain: "classroom-9bd20.firebaseapp.com",
  projectId: "classroom-9bd20",
  storageBucket: "classroom-9bd20.appspot.com",
  messagingSenderId: "755857558279",
  appId: "1:755857558279:web:413deee9920da2389f13a2"
});

const db = firebaseApp.firestore();
export default db;
