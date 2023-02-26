import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKdRFwqD1yjfpcsT-aildNdA0VLM_516M",
  authDomain: "react-slack-clone-cd006.firebaseapp.com",
  projectId: "react-slack-clone-cd006",
  storageBucket: "react-slack-clone-cd006.appspot.com",
  messagingSenderId: "719863881391",
  appId: "1:719863881391:web:846091e0d3d51c66c7be5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase;