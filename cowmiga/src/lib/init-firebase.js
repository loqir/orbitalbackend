// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4kijEZuiSPG_xsZHdlQIW4U6cvlfAmhY",
  authDomain: "orbital-9ff19.firebaseapp.com",
  projectId: "orbital-9ff19",
  storageBucket: "orbital-9ff19.appspot.com",
  messagingSenderId: "1064444534981",
  appId: "1:1064444534981:web:0c07af2af732e48e72d0ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app)