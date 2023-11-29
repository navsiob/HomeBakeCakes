import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1LP2Gd-AU539gD3WJLHikKpKtRZzfBkM",
  authDomain: "martian-treats.firebaseapp.com",
  projectId: "martian-treats",
  storageBucket: "martian-treats.appspot.com",
  messagingSenderId: "444923794675",
  appId: "1:444923794675:web:d4115ebfc5b8e3dd0cd386",
  measurementId: "G-JQ0RLCYRB6",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
