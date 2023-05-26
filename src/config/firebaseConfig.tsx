import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTEINKWjRA8fvFs8HVo7zdfSMK9ELtZIQ",
  authDomain: "airbnb-clone-app-3d688.firebaseapp.com",
  projectId: "airbnb-clone-app-3d688",
  storageBucket: "airbnb-clone-app-3d688.appspot.com",
  messagingSenderId: "547373873393",
  appId: "1:547373873393:web:db2874a095bee0f1d35150",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
