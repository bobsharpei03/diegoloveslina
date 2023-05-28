import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCbEX381cUubutIt1Kltek-TppZGqTdvK0",
    authDomain: "project-1-1557190380231.firebaseapp.com",
    databaseURL: "https://project-1-1557190380231-default-rtdb.firebaseio.com",
    projectId: "project-1-1557190380231",
    storageBucket: "project-1-1557190380231.appspot.com",
    messagingSenderId: "1031199124554",
    appId: "1:1031199124554:web:e58daf21b47c202a538ab3"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;