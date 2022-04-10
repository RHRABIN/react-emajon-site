// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLo7YiVTI9aSM7EkShWTIXvRKmqNBLw_I",
    authDomain: "emajon-auth-1da44.firebaseapp.com",
    projectId: "emajon-auth-1da44",
    storageBucket: "emajon-auth-1da44.appspot.com",
    messagingSenderId: "110422977859",
    appId: "1:110422977859:web:ca0ae40c543859a07f13f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;