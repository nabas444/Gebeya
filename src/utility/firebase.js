// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqAXYey5prbl5_UHLHtQ6vzLDGGGn4ZiU",
  authDomain: "gebeyacom.firebaseapp.com",
  projectId: "gebeyacom",
  storageBucket: "gebeyacom.firebasestorage.app",
  messagingSenderId: "67117720272",
  appId: "1:67117720272:web:f45a8e9cf91cd5c3d9b4d5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

