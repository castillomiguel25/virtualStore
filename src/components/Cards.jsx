import React, { useContext, useState } from 'react';
import AppContext from '@context/AppContext';
import MyOrder from '@components/MyOrder';
import { useDarkModeLogic } from "../hooks/logic";
import CheckoutSide from '@components/checkoutSideMenu';

const Card = ({ data, product }) => {

  if (!data) {
    return null;
  }

  const { category, images, title, price, id } = data;

  if (!category || !images || !title || !price || !id) {
    return null;
  }

  const {
    toggleOrders,
    setToggleOrders,
    checkoutOrders,
    setcheckoutOrders
  } = useDarkModeLogic();

  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const { setProductToShow, setProductCart, productCart, setCount, count, setIsVisible, setIsVisibleCheck } = useContext(AppContext);

  const ProductsShow = (products) => {
    setToggleOrders(!toggleOrders);
    setProductToShow({ productToShow: products });
    setIsVisible(true);
  };

  const addProductsToCart = (event, product) => {
    event.stopPropagation()
    setCount(count + 1)
    setProductCart([...productCart, product])
    setcheckoutOrders(!checkoutOrders)
    setIsVisibleCheck(true)
  };

  const renderIcon = (id) => {
    const isInCart = productCart.filter(product => product.id === id).length > 0

    if (isInCart) {
      return (
        <button
          className="px-3 mb-3 py-1 text-sm font-semibold text-white bg-black dark:bg-black dark:text-white"
        >
          Agregado
        </button>
      )
    }
    else {
      return (
        <button
          onClick={(event) => addProductsToCart(event, data)}
          className="px-3 mb-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gradient-to-r dark:from-emerald-500 dark:to-emerald-600 dark:text-white"
        >
          Comprar
        </button>
      )
    }
  }

  return (
    <div>
      {toggleOrders && <MyOrder />}
      {checkoutOrders && <CheckoutSide />}

      <div
        onClick={() => ProductsShow(data)}
        className={`row ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className='bg-white cursor-pointer mb-4 mx-auto'>
            <figure className='relative'>
              <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{category.name}</span>
              <img className='w-full h-auto object-cover rounded-lg' src={images} alt={title} />
              <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
                +
              </div>
              {isHovered && (
                <button
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 text-sm  bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gradient-to-r dark:from-emerald-500 dark:to-emerald-600 dark:text-white`}
                  onMouseEnter={() => setIsButtonHovered(true)}
                  onMouseLeave={() => setIsButtonHovered(false)}
                >
                  Ver más
                </button>
              )}
            </figure>
            <p className='flex justify-between px-3 my-3'>
              <span className='text-sm dark:text-black mt-1'>{title}</span>
              <span className='text-lg rounded-lg text-black dark:text-black'>${price}</span>
              {renderIcon(data.id)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;