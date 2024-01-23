// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9rLfm-DGbKvxhzCtmBQ6pef0EvUz6jIo",
  authDomain: "fullstack-app-e09b4.firebaseapp.com",
  projectId: "fullstack-app-e09b4",
  storageBucket: "fullstack-app-e09b4.appspot.com",
  messagingSenderId: "205922513203",
  appId: "1:205922513203:web:16b42ec0ed8aa2dfe4ce46"
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);

export default Firebase;