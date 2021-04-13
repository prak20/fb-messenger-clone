import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAt5yeACC0qmJkmdphmeD68E-Y4FHupkvU",
    authDomain: "fb-messenger-clone-e94f3.firebaseapp.com",
    projectId: "fb-messenger-clone-e94f3",
    storageBucket: "fb-messenger-clone-e94f3.appspot.com",
    messagingSenderId: "930226140502",
    appId: "1:930226140502:web:0e18de819167988126d2f7",
    measurementId: "G-LCS3DEP347"
  });

  const db=firebaseApp.firestore();

  export default db;