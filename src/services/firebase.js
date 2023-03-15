import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0JEymsIv2RZ7nIdeliIyDjIxC_Unyej0",
  authDomain: "randy-binondo.firebaseapp.com",
  projectId: "randy-binondo",
  storageBucket: "randy-binondo.appspot.com",
  messagingSenderId: "281068143934",
  appId: "1:281068143934:web:475890a53490207571d86f",
  measurementId: "G-VRK4VLJLNW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
export const database = getFirestore(app);