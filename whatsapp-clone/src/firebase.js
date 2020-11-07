// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCeloEwL59vmKDAT-TIcZZMbJwdUjGiv_0",
    authDomain: "whats-app-clone-97fc3.firebaseapp.com",
    databaseURL: "https://whats-app-clone-97fc3.firebaseio.com",
    projectId: "whats-app-clone-97fc3",
    storageBucket: "whats-app-clone-97fc3.appspot.com",
    messagingSenderId: "833170744767",
    appId: "1:833170744767:web:a99d6d95e2ea5e48c06d0a",
    measurementId: "G-T0YD8SKJVN"
  };

// const firebaseApp = firebase.intializeApp(firebaseConfig);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;