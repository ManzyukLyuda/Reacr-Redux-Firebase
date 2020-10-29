import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDfNhkQWA7sRYtQ5Y4yPAeC0bDnfd7f0jI",
    authDomain: "todo-d4012.firebaseapp.com",
    databaseURL: "https://todo-d4012.firebaseio.com",
    projectId: "todo-d4012",
    storageBucket: "todo-d4012.appspot.com",
    messagingSenderId: "459891985693",
    appId: "1:459891985693:web:357606cfe16a3c9238e5f4"
  }

const Firebase = firebase.initializeApp(firebaseConfig);

export {
  Firebase,
} 