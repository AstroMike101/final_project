// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDX4D9DiN0mq46K799tfpeokaBh5Ld-40",
  authDomain: "cs4050-final.firebaseapp.com",
  projectId: "cs4050-final",
  storageBucket: "cs4050-final.appspot.com",
  messagingSenderId: "162578543244",
  appId: "1:162578543244:web:a5d0cb96ce42aee23481a9",
  measurementId: "G-7EBQ16Y8PJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);