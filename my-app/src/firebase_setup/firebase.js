import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { Functions } from 'firebase/functions';
import firebase from 'firebase/app';



const firebaseConfig = {
  apiKey: "AIzaSyDDX4D9DiN0mq46K799tfpeokaBh5Ld-40",
  authDomain: "cs4050-final.firebaseapp.com",
  databaseURL: "https://cs4050-final-default-rtdb.firebaseio.com",
  projectId: "cs4050-final",
  storageBucket: "cs4050-final.appspot.com",
  messagingSenderId: "162578543244",
  appId: "1:162578543244:web:a5d0cb96ce42aee23481a9",
  measurementId: "G-7EBQ16Y8PJ"
}

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getDatabase(app);
export default {firebaseConfig, app};