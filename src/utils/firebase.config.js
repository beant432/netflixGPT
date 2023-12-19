// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBztePOuYOhhlhE-wefK6EWI-D7_WxXaVU",
  authDomain: "netflix-gpt-fa942.firebaseapp.com",
  projectId: "netflix-gpt-fa942",
  storageBucket: "netflix-gpt-fa942.appspot.com",
  messagingSenderId: "10149307947",
  appId: "1:10149307947:web:cc8cea5722e1f017076c6e",
  measurementId: "G-QDHPLM6VVJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics)
export const auth = getAuth();
