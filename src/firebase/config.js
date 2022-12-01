// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore,doc,getDoc} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRsYEVx8TFg-05U2AWYrpyeB319ji5p1M",
  authDomain: "rticketsapp.firebaseapp.com",
  projectId: "rticketsapp",
  storageBucket: "rticketsapp.appspot.com",
  messagingSenderId: "994399824533",
  appId: "1:994399824533:web:6df3326811b08af45e099c",
  measurementId: "G-SH8R1MFCBT"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

const analytics = getAnalytics(FirebaseApp);