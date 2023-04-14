import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBpNy7fQBbil8GLBj-9tURoPFofNNqrOsc",
    authDomain: "student-7d134.firebaseapp.com",
    projectId: "student-7d134",
    storageBucket: "student-7d134.appspot.com",
    messagingSenderId: "465572301954",
    appId: "1:465572301954:web:0a61bac63317afca59f89b",
    measurementId: "G-TEBGH2LB7L"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
