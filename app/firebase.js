// Import the functions you need from the SDKs you need
import { initializeApp } from  "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOr0SjiOS0nZRk2YBK779nPM8-eSNd_qY",
    authDomain: "ps-login-ec067.firebaseapp.com",
    projectId: "ps-login-ec067",
    storageBucket: "ps-login-ec067.appspot.com",
    messagingSenderId: "196133405927",
    appId: "1:196133405927:web:91e8f7d05f423c32134e42"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
