import firebase from "firebase/app";
import "firebase/database";
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyDULKOJr2aLmVKDmBoDVMYoXkwPJyhJSHs",
  authDomain: "sunshine-cfb4d.firebaseapp.com",
  databaseURL: "https://sunshine-cfb4d-default-rtdb.firebaseio.com",
  projectId: "sunshine-cfb4d",
  storageBucket: "sunshine-cfb4d.appspot.com",
  messagingSenderId: "710551761195",
  appId: "1:710551761195:web:ed71e5a8ac8023afeb556e",
  measurementId: "G-KK64H2HZ38"
};

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()
export {firebaseAuth, firebaseDb}