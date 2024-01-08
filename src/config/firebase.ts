import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrIipwS4KpYXOpxh20AOAu1oChJlYXawA",
  authDomain: "short-link-app-3b7ed.firebaseapp.com",
  projectId: "short-link-app-3b7ed",
  storageBucket: "short-link-app-3b7ed.appspot.com",
  messagingSenderId: "331673207541",
  appId: "1:331673207541:web:c8958d404939f24e3bfbbc",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
