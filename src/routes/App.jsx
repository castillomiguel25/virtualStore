import React, { useState } from 'react';
import Home from '@pages/HomeUser';
import House from '../../pages/HomeInitial';
// import Register from "../register/Register"
import firebaseApp from '../../pages/Callfirebase/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase);
    } else {
      setUser(null);
    }
  });

  return <>{user ? <Home user={user} /> : <House />} </>;
}

export default App;