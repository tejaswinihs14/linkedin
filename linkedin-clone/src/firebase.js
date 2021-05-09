import firebase from "firebase";
require("firebase/auth");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_rBmDMyZpaZsdHsW0wOUDjQ9EAcCY_Co",
  authDomain: "linkedin-clone-24c1e.firebaseapp.com",
  projectId: "linkedin-clone-24c1e",
  storageBucket: "linkedin-clone-24c1e.appspot.com",
  messagingSenderId: "613392228868",
  appId: "1:613392228868:web:d739a0379cd48136770b51",
  measurementId: "G-SQDZBC2VBC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
