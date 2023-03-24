import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCo7rR4ju3XxRyRaMzELneQT8CHeKNq49U",
  authDomain: "whatsappclone-13477.firebaseapp.com",
  projectId: "whatsappclone-13477",
  storageBucket: "whatsappclone-13477.appspot.com",
  messagingSenderId: "1253511845",
  appId: "1:1253511845:web:4f5193f94ce2044ae7f34c",
  measurementId: "G-8DM2FZDCKL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
