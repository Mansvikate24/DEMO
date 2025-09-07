
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDZBjIFJWH6o7ULmoe7269kedx_nGDbtT0",
    authDomain: "demologin-8126a.firebaseapp.com",
    projectId: "demologin-8126a",
    storageBucket: "demologin-8126a.firebasestorage.app",
    messagingSenderId: "425931568069",
    appId: "1:425931568069:web:75df1faf033d49b1f391ac",
    measurementId: "G-XNRTZ5YHM3"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
