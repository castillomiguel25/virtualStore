import React, { useContext } from 'react';
import one from '@logos/img-3.jpg';
import Image from 'next/image';
import AppContext from '@context/AppContext';

const ProductsTwo = ({ product }) => {
  const { addToCart } = useContext(AppContext);
  const handleClick = (item) => {
    addToCart(item);
  };
  return (
    <div className='flex'>
      <div className="w-full dark:bg-white dark:text-black  rounded-3xl shadow-md sm:max-w-sm ml-3">
        <Image className="object-cover w-full h-48 rounded-3xl" src={one} alt="image" />
        <div className="p-4">
          <h4 className="text-xl font-semibold tracking-tight text-blue-600">React Tailwind Card with Image</h4>
          <p className="mb-2 leading-normal">react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content.</p>
          <button onClick={() => handleClick(product)} className="px-4 py-2 text-sm text-white bg-indigo-500 rounded shadow dark:bg-emerald-500 dark:text-white">
            Comprar
          </button>
          <button className="px-6 py-2 bg-black text-white text-sm ml-5 rounded shadow">Ver características</button>
        </div>
      </div>

    </div>
  );
};

export default ProductsTwo;
