// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDWzgIXCa2XqpwCfrNolhOXaZuyXEy1ASw",
  authDomain: "alchemystic.firebaseapp.com",
  projectId: "alchemystic",
  storageBucket: "alchemystic.firebasestorage.app",
  messagingSenderId: "978006194677",
  appId: "1:978006194677:web:787ce64ce2994cb03648bc",
  measurementId: "G-L7Y54JX9J5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);