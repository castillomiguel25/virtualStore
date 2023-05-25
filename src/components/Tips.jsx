import Image from 'next/image';
import React from 'react';
import uno from '@icons/one.webp';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';
import { GiUnbalanced } from 'react-icons/gi';

const Tips = () => {
  return (
    <div className="mb-5 mt-10">
      <div className="flex justify-center mt-5 text-black dark:bg-black dark:text-white">
        <h1 className="lg:text-4xl sm:text-1xl font-bold mb-5">Ventajas de tener una tienda virtual</h1>
      </div>

      <div className="sm:grid lg:flex sm:grid-cols-2">
        <div>
          <Image src={uno} alt="img-presentation"></Image>
        </div>
        <div className="ml-10">
          <p className="text-1xl mt-5">TIENDA EN LÍNEA</p>
          <h1 className="text-1xl sm:justify-center content-center sm:hidden hidden sm:block sdm:text-center mt-3 font-bold">Vende en linea</h1>
          <h3 className="text-2xl text-center mt-3">¡Comience a vender sus productos en línea hoy!</h3>
          <div className="sm:grid lg:flex mt-5">
            <BsFillJournalBookmarkFill className="dark:text-emerald-500 text-indigo-500" size={45} />
            <p className="ml-5 mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing</p>
          </div>
          <div className="sm:grid lg:flex mt-3">
            <FaMoneyBillAlt className="dark:text-emerald-500 text-indigo-500" size={45} /> <p className="ml-5 mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing</p>
          </div>
          <div className="sm:grid lg:flex mt-3">
            <BiTimeFive className="dark:text-emerald-500 text-indigo-500" size={45} /> <p className="ml-5 mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing</p>
          </div>
          <div className="sm:grid lg:flex mt-3">
            <GiUnbalanced className="dark:text-emerald-500 text-indigo-500" size={45} /> <p className="ml-5 mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;
