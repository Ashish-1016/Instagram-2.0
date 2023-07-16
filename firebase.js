// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO_kNwC37mGUonHYnW4zowIekXMngm3nA",
  authDomain: "social-media-e8d31.firebaseapp.com",
  projectId: "social-media-e8d31",
  storageBucket: "social-media-e8d31.appspot.com",
  messagingSenderId: "520671405988",
  appId: "1:520671405988:web:fb11deb84c70b51a288331"
};

// Initialize Firebase with singleton (for Next server-side rendering)
const app = !getApps().lenght ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
