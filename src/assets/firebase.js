// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5mnEhTmsqIe5urltt_qf2EN0m2epAmhY",
  authDomain: "webtrix-b2724.firebaseapp.com",
  projectId: "webtrix-b2724",
  storageBucket: "webtrix-b2724.firebasestorage.app",
  messagingSenderId: "842058490464",
  appId: "1:842058490464:web:418f9b0b986cbf196fd905",
  measurementId: "G-8Q1FJJGPZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);