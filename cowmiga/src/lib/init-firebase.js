// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqAEsJBoyIFBnx90zLR9Tt4TzqL0-ed-A",
    authDomain: "stonktrek-b19d6.firebaseapp.com",
    projectId: "stonktrek-b19d6",
    storageBucket: "stonktrek-b19d6.appspot.com",
    messagingSenderId: "77697963409",
    appId: "1:77697963409:web:6a709949a767b8245f7630"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)