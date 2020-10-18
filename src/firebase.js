import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCmOkdQmIQcqOXh8e6q5mplzb-WeZmUjWs",
  authDomain: "clone-aa343.firebaseapp.com",
  databaseURL: "https://clone-aa343.firebaseio.com",
  projectId: "clone-aa343",
  storageBucket: "clone-aa343.appspot.com",
  messagingSenderId: "507476535099",
  appId: "1:507476535099:web:28d0537608bf12bf90b91e",
  measurementId: "G-1FKE3G5V9B"
});


const auth = firebase.auth();

export {auth};