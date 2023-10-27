// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqG2dd7Emd0MkjS8ITmkT_xsIqW5Z7vqk",
  authDomain: "authentication-41992.firebaseapp.com",
  projectId: "authentication-41992",
  storageBucket: "authentication-41992.appspot.com",
  messagingSenderId: "115850302740",
  appId: "1:115850302740:web:d248ab7a86ea07e7295e01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth };