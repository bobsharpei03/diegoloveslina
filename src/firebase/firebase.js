import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/database'
import Axios from 'axios';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  Axios.defaults.withCredentials = true;

  export {Axios, db}
  //export default firebase;