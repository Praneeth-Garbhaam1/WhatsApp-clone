// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ29TIYa7bONyy2PlBCcfWNhpMD6Uq9oQ",
  authDomain: "whats-app-clone-ee5fc.firebaseapp.com",
  databaseURL: "https://whats-app-clone-ee5fc-default-rtdb.firebaseio.com",
  projectId: "whats-app-clone-ee5fc",
  storageBucket: "whats-app-clone-ee5fc.appspot.com",
  messagingSenderId: "559882197718",
  appId: "1:559882197718:web:d84dba261b9a48dcf28777",
  measurementId: "G-7T0QZXERYN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.
GoogleAuthProvider();

export { auth, provider };
export default db;