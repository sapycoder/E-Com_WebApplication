// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBYsJ-TrbAruQ6UNXVC2phDz_4RUOkozSE",
    authDomain: "challenge-79ced.firebaseapp.com",
    projectId: "challenge-79ced",
    storageBucket: "challenge-79ced.appspot.com",
    messagingSenderId: "373786829031",
    appId: "1:373786829031:web:f6f45dc478452dd9824242",
    measurementId: "G-NXY38EPZJK"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };