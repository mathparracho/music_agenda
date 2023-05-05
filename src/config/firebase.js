// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUkqr62QmScETTBkV_kaNIhVSJMhr-G-0",
  authDomain: "fir-course-32c23.firebaseapp.com",
  projectId: "fir-course-32c23",
  storageBucket: "fir-course-32c23.appspot.com",
  messagingSenderId: "68481971011",
  appId: "1:68481971011:web:25fba43dbe958ad4aeb5f6",
  measurementId: "G-92QE3DX6F5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();