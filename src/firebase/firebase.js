import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/compat/database'
import Axios from 'axios';

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

  const db = firebase.firestore();

  Axios.defaults.withCredentials = true;

  export {Axios, db}
  //export default firebase;