import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsAykV6r5xwnciXB96hi-lQlVEwK-t7Fk",
  authDomain: "clone-2024-8cd75.firebaseapp.com",
  projectId: "clone-2024-8cd75",
  storageBucket: "clone-2024-8cd75.appspot.com",
  messagingSenderId: "314646727016",
  appId: "1:314646727016:web:a8acbc74e6de55dc1f2edd",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
