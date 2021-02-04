import React, { useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyAywu_MplIZwlwycv9yW0l0g3MXT_qcjvg",
  authDomain: "chatroomapp-react.firebaseapp.com",
  projectId: "chatroomapp-react",
  storageBucket: "chatroomapp-react.appspot.com",
  messagingSenderId: "532513539929",
  appId: "1:532513539929:web:322e605740624bf03c6e48"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function App() {
  return (
    <div className="App">
      <header>

      </header>
    </div>
  );
}

export default App;
