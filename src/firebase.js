// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBysDAAH04F4jyGnaxf6PjCxdfFjsPHOlk",
  authDomain: "ai--website.firebaseapp.com",
  projectId: "ai--website",
  storageBucket: "ai--website.appspot.com",
  messagingSenderId: "707259047783",
  appId: "1:707259047783:web:d1b35801beb9a0281859c2",
  measurementId: "G-LNWCKJQ3HG",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
