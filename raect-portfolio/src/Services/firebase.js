// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAzHYo0njDozVZVFCmceMgZ1WNrVq7I5gI",
  authDomain: "protfolio-jenish.firebaseapp.com",
  projectId: "protfolio-jenish",
  storageBucket: "protfolio-jenish.firebasestorage.app",
  messagingSenderId: "702735937125",
  appId: "1:702735937125:web:eb08a0d7bfd4794dbfe08c",
  measurementId: "G-M0LHZHEB4W"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);