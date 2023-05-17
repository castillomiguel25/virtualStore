import React, { useState } from 'react';
import firebaseApp from "./Callfirebase/firebase";
import HomePage from "@components/HomePage";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect, GoogleAuthProvider
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc
} from "firebase/firestore"

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(firebaseApp);

const handlerAuth = () => {
  let provider = new firebaseApp.auth.GoogleAuthProvider(GoogleAuthProvider);
  firebaseApp.auth().signInWithPopup(provider)
    .then(function (result) {
      setUser(result.user)
      console.log(' ha iniciado session');
    })
    .catch(function (error) {
      console.log(error.code, error.message)
    })
}

function Logins() {

  const firestore = getFirestore(firebaseApp)
  const [isRegister, setIsRegister] = useState(false);

  async function RegisterUser(email, password) {
    const infUser = await createUserWithEmailAndPassword(auth, email, password).then((usuariofirebase) => {
      return usuariofirebase;
    });
    console.log(infUser.user.uid);
    const docuRef = doc(firestore, `usuarios/${infUser.user.uid}`);
    setDoc(docuRef, { correo: email })
  }

  function submitHandler(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    console.log('submit', email, password);
    if (isRegister) {
      RegisterUser(email, password);
    } else {
      signInWithEmailAndPassword(auth, email, password);
    }
  }
  return (
    <>
      <HomePage />
    </>
  )
}
export default Logins