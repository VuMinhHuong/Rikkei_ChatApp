// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { setActiveScreen } from "./view/index";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBScVJi8-q4czeS6qj2ss_hVX0jVHmUa9Q",
  authDomain: "chat-app-d9fdf.firebaseapp.com",
  projectId: "chat-app-d9fdf",
  storageBucket: "chat-app-d9fdf.appspot.com",
  messagingSenderId: "411660980775",
  appId: "1:411660980775:web:13807407fe6903a878b402"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// setActiveScreen("chatPage");
setActiveScreen("loginPage");
// setActiveScreen("registerPage");
// setActiveScreen("resetPasswordPage");