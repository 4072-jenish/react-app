// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDETd0MeQOJ3J5V3Vzy4faHwnJSbeGPbW8",
  authDomain: "flipcart-clone-cc07d.firebaseapp.com",
  projectId: "flipcart-clone-cc07d",
  storageBucket: "flipcart-clone-cc07d.firebasestorage.app",
  messagingSenderId: "1020643975758",
  appId: "1:1020643975758:web:56c5086c2c0cff9b54d91f",
  measurementId: "G-JL2R317765"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);