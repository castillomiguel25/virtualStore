import React from 'react';
import firebaseApp from '../../pages/Callfirebase/firebase';
import { getAuth, signOut } from 'firebase/auth';
const auth = getAuth(firebaseApp);

const Menu = () => {
  return (
    <div className="my-14">
      <ul>
        <li className="text-center flex justify-center text-black dark:text-white" onClick={() => signOut(auth)}>
          <a className="cursor-pointer mt-10">Cerrar Sesión </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
