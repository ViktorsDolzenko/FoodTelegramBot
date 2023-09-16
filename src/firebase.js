// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebase = {
    apiKey: "AIzaSyD8l4Lh4UOJp5dy09rDeJCEUhwAvAMj_3k",
    authDomain: "food-maker-5b027.firebaseapp.com",
    projectId: "food-maker-5b027",
    storageBucket: "food-maker-5b027.appspot.com",
    messagingSenderId: "906978750407",
    appId: "1:906978750407:web:14d86d0b98dcfc4604f3e2"
};

// Initialize Firebase
const app = initializeApp(firebase);

export const db = getFirestore(app);
