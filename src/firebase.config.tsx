// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-6pQzyik9T94HCTAd63NzeS4ZZfwQbUQ",
  authDomain: "user-login-35aff.firebaseapp.com",
  projectId: "user-login-35aff",
  storageBucket: "user-login-35aff.appspot.com",
  messagingSenderId: "802537271138",
  appId: "1:802537271138:web:38741c0de3ec4a0123863b",
  measurementId: "G-67DXY62ZKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);