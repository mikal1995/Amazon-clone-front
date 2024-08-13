import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5me4dkSIxE1YybiMXYpR53PBJQXpFkfo",
  authDomain: "clone-ba803.firebaseapp.com",
  projectId: "clone-ba803",
  storageBucket: "clone-ba803.appspot.com",
  messagingSenderId: "377752001158",
  appId: "1:377752001158:web:1d91098103a027097d8f07"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
