// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAACbv9pnuciMppNLMpyGSlKDIBio5Ls3Y",
  authDomain: "netflixgpt-7377d.firebaseapp.com",
  projectId: "netflixgpt-7377d",
  storageBucket: "netflixgpt-7377d.appspot.com",
  messagingSenderId: "941011006238",
  appId: "1:941011006238:web:04d81aa484f3eefbf00f0f",
  measurementId: "G-4QNK6JXJ8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();