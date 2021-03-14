// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB15jtnNfKK6CYN17LhhlAD-bhxT6kIxVk",
    authDomain: "tinder-clone-64e19.firebaseapp.com",
    projectId: "tinder-clone-64e19",
    storageBucket: "tinder-clone-64e19.appspot.com",
    messagingSenderId: "210246179275",
    appId: "1:210246179275:web:6f49028be71890206f7e4e",
    measurementId: "G-S6Z4H1MS3N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebase.firestore();

  export default database;