import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyCCxXcfw9Y2eOkLZ_TeyZRk_E-veDfci2g",
    authDomain: "reachme-bb31f.firebaseapp.com",
    databaseURL: "https://reachme-bb31f.firebaseio.com",
    projectId: "reachme-bb31f",
    storageBucket: "reachme-bb31f.appspot.com",
    messagingSenderId: "92042176226",
    appId: "1:92042176226:web:9f043f7f99bc004108e0bb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export  {
   storage, firebase as default
 }
