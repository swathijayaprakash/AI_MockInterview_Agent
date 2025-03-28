// Import the functions you need from the SDKs you need
import { initializeApp,getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAAZGj1PAxEvC7TjEgN8AfW9hjdxTPGWI",
  authDomain: "mockinterview-9e273.firebaseapp.com",
  projectId: "mockinterview-9e273",
  storageBucket: "mockinterview-9e273.firebasestorage.app",
  messagingSenderId: "875422662878",
  appId: "1:875422662878:web:62216316d35eda702b824f",
  measurementId: "G-9T0PSJWM56"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);