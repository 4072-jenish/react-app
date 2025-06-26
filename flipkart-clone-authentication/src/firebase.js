// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDETd0MeQOJ3J5V3Vzy4faHwnJSbeGPbW8",
  authDomain: "flipcart-clone-cc07d.firebaseapp.com",
  projectId: "flipcart-clone-cc07d",
  storageBucket: "flipcart-clone-cc07d.appspot.com",
  messagingSenderId: "1020643975758",
  appId: "1:1020643975758:web:56c5086c2c0cff9b54d91f",
  measurementId: "G-JL2R317765"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
