// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// //
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBnv7nn7spQvwbNCGbaNw0vYUIKzQI7nyE",
//   authDomain: "prettyeasy-e5069.firebaseapp.com",
//   projectId: "prettyeasy-e5069",
//   storageBucket: "prettyeasy-e5069.firebasestorage.app",
//   messagingSenderId: "675532967047",
//   appId: "1:675532967047:web:404a5d4947c336d231bc22",
//   measurementId: "G-06EFRW0PTE"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

// Import the necessary functions and modules for Firebase
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app"; // Import the function to initialize the Firebase app
// import { initializeAuth } from "firebase/auth"; // Import Firebase authentication functions
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
/*  
  apiKey  -- >// The API key to authenticate requests to Firebase services
  authDomain  -- >// The domain name for Firebase Authentication
  projectId  -- > // The unique identifier for your Firebase project
  storageBucket  -- > // The URL of your project's default storage bucket
  messagingSenderId  -- > // The sender ID used for cloud messaging
  appId  -- > // The unique identifier for the Firebase app instance
  */
// Initialize Firebase with environment variables , Firebase configuration object containing the project-specific Firebase keys
const firebaseConfig = {
  apiKey: "AIzaSyBnv7nn7spQvwbNCGbaNw0vYUIKzQI7nyE",
  authDomain: "prettyeasy-e5069.firebaseapp.com",
  projectId: "prettyeasy-e5069",
  storageBucket: "prettyeasy-e5069.firebasestorage.app",
  messagingSenderId: "675532967047",
  appId: "1:675532967047:web:404a5d4947c336d231bc22",
  measurementId: "G-06EFRW0PTE",
};
// Initialize the Firebase app with the provided config
const app = initializeApp(firebaseConfig);
// This function initializes your Firebase app using the `firebaseConfig` object, allowing you to access Firebase services (e.g., Authentication, Firestore).

// Initialize Firebase Authentication with persistence using AsyncStorage
// const auth = initializeAuth(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(app);
// Export the `auth` object so it can be used throughout the app for authentication functions (e.g., sign-in, sign-out)
export { auth };
