import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "learn-exercises-beb83.firebaseapp.com",
  projectId: "learn-exercises-beb83",
  storageBucket: "learn-exercises-beb83.appspot.com",
  messagingSenderId: "831554237425",
  appId: "1:831554237425:web:643c87d6c7cd7367fe8a50",
  databaseURL: "https://learn-exercises-beb83-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };