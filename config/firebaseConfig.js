// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// 
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnv7nn7spQvwbNCGbaNw0vYUIKzQI7nyE",
  authDomain: "prettyeasy-e5069.firebaseapp.com",
  projectId: "prettyeasy-e5069",
  storageBucket: "prettyeasy-e5069.firebasestorage.app",
  messagingSenderId: "675532967047",
  appId: "1:675532967047:web:404a5d4947c336d231bc22",
  measurementId: "G-06EFRW0PTE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);