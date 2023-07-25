import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCk7yfxuLY4yR0hYtcY7raIYJQbGN-Z97s",
  authDomain: "mobilephone-654ff.firebaseapp.com",
  projectId: "mobilephone-654ff",
  storageBucket: "mobilephone-654ff.appspot.com",
  messagingSenderId: "308110718618",
  appId: "1:308110718618:web:3134454ad21300a0425123",
  measurementId: "G-WJPM79Q028"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
