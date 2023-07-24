import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfytwVrievpC_QSfhpLnsPley_0O5oo4Y",
  authDomain: "users-766bc.firebaseapp.com",
  projectId: "users-766bc",
  storageBucket: "users-766bc.appspot.com",
  messagingSenderId: "372226104340",
  appId: "1:372226104340:web:7c441834b174112f91db01",
  measurementId: "G-6S11RGP5RL"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


