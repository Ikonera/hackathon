import React from 'react';
import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const config = {
  apiKey: "AIzaSyBM6m7RaUIBZ0zZFnk5wYI1EwkLTZVyOwQ",
    authDomain: "fantine-3d6fd.firebaseapp.com",
    databaseURL: "https://fantine-3d6fd-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "fantine-3d6fd",
    storageBucket: "fantine-3d6fd.appspot.com",
    messagingSenderId: "10229391457",
    appId: "1:10229391457:web:3a3c1fb88a8cc1da8a0a20"
};

Firebase.initializeApp(config);

export default Firebase;
export const Auth = Firebase.auth();
export const Database = Firebase.database();
export const UserContext = React.createContext({ user: null });



export const createUniqueKey = () => {
  return Database.ref('/').push().key;
}