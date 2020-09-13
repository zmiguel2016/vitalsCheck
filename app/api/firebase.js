import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeLY2xLLLessA1a2AiTP8PUvGP_5XpK6A",
  authDomain: "vitalschecker.firebaseapp.com",
  databaseURL: "https://vitalschecker.firebaseio.com",
  projectId: "vitalschecker",
  storageBucket: "vitalschecker.appspot.com",
  messagingSenderId: "725765213257",
  appId: "1:725765213257:web:d0caee280d236ebb890398",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
