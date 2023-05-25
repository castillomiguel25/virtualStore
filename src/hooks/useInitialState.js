import { useState, useEffect } from 'react';

const useInitialState = () => {
  // Shopping Cart · Increment quantity
  const [count, setCount] = useState(0);

  // logica del api

  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  // logica para mostrar productos
  const [productToShow, setProductToShow] = useState({});

  // logica para cerrar productos
  const [isVisible, setIsVisible] = useState(true);

  // logica para myOrders
  const [order, setOrder] = useState([]);

  // logica para abrir el modal
  const [isOpen, setIsOpen] = useState(false);

  // logica para un carrito
  const [productCart, setProductCart] = useState([]);
  const [isVisibleCheck, setIsVisibleCheck] = useState(true);

  // logica del buscador
  const [searchTitle, setSearchTitle] = useState('');
  const [filteredItems, setFilteredItems] = useState(null);

  // logica de category
  const [searchByCategory, setSearchByCategory] = useState('');

  // functions

  const filteredByTitle = (items, searchTitle) => {
    return items?.filter((item) => item.title.toLowerCase().includes(searchTitle.toLowerCase()));
  };

  const filteredItemsByCategory = (items, searchByCategory) => {
    console.log(items)
    return items?.filter((item) => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()));
  };

  useEffect(() => {
    if (searchTitle) setFilteredItems(filteredByTitle(items, searchTitle));
    if (searchByCategory) setFilteredItems(filteredItemsByCategory(items, searchByCategory));

  }, [items, searchTitle, searchByCategory]);

  return {
    setProductCart,
    productCart,
    productToShow,
    setProductToShow,
    count,
    setCount,
    isVisible,
    setIsVisible,
    isVisibleCheck,
    setIsVisibleCheck,
    order,
    setOrder,
    isOpen,
    setIsOpen,
    searchTitle,
    setSearchTitle,
    items,
    setItems,
    filteredItems,
    searchByCategory,
    setSearchByCategory
  };
};
export default useInitialState;
