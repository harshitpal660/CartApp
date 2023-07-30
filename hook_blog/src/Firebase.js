import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDgjX9Z_FHjwreSezjg_TztTi5X02mR1Qo",
  authDomain: "react-hooks-blog-2af30.firebaseapp.com",
  projectId: "react-hooks-blog-2af30",
  storageBucket: "react-hooks-blog-2af30.appspot.com",
  messagingSenderId: "989720375593",
  appId: "1:989720375593:web:91526466346c6b17d70738",
  measurementId: "G-GXG5DTREE6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
