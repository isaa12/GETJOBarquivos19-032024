import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth,GoogleAuthProvider ,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
 const firebaseConfig = {
    apiKey: "AIzaSyAM2f2FPHlcfdBVO7V2ekmeR0rY78kmBE0",
    authDomain: "getjob-e7895.firebaseapp.com",
    projectId: "getjob-e7895",
    storageBucket: "getjob-e7895.appspot.com",
    messagingSenderId: "553594272821",
    appId: "1:553594272821:web:169b4dc9d4c5ba82ca457c",
    measurementId: "G-T9Q3TV9N70"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en';
  const provider = new GoogleAuthProvider();


  const google-login = document.getElementById
