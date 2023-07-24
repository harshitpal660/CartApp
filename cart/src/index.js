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
  apiKey: "AIzaSyDdLV6ORmdGBz4FhtXMWhIRMyOmXgtGMr0",
  authDomain: "cart-13617.firebaseapp.com",
  projectId: "cart-13617",
  storageBucket: "cart-13617.appspot.com",
  messagingSenderId: "893928891603",
  appId: "1:893928891603:web:f98aa0220d49c3a3b7a026"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
