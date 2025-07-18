// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGBqATl2nOfYX16D8NXypdZ1g2NA8Winc",
  authDomain: "castro-app-57391.firebaseapp.com",
  projectId: "castro-app-57391",
  storageBucket: "castro-app-57391.firebasestorage.app",
  messagingSenderId: "799404659053",
  appId: "1:799404659053:web:07b473e7608ab465684a64",
  measurementId: "G-K7CBB553N0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);