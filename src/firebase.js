import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmEPQH1yP2RuFDBXAfKbYMNW52HjNOIM0",
  authDomain: "chat-6ec41.firebaseapp.com",
  projectId: "chat-6ec41",
  storageBucket: "chat-6ec41.appspot.com",
  messagingSenderId: "699494531520",
  appId: "1:699494531520:web:3c5dc4ba893fe3469a4825",
  measurementId: "G-T6Q68G1TPT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
