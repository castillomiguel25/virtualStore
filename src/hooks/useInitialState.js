import { useState, useEffect } from "react";

const useInitialState = () => {

    // Shopping Cart · Increment quantity
    const [count, setCount] = useState(0)

    // logica para mostrar productos
    const [productToShow, setProductToShow] = useState({})

    // logica para cerrar productos
    const [isVisible, setIsVisible] = useState(true);

    // logica para myOrders
    const [order, setOrder] = useState([])

    // logica para abrir el modal
    const [isOpen, setIsOpen] = useState(false);

    // logica para un carrito
    const [productCart, setProductCart] = useState([])
    const [isVisibleCheck, setIsVisibleCheck] = useState(true);

    // logica del api

    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data));
    }, []);

    // logica del buscado
    const [searchTitle, setSearchTitle] = useState([])
    console.log(searchTitle, 'hola')

    return {
        setProductCart, productCart, productToShow, setProductToShow, count, setCount, isVisible, setIsVisible, isVisibleCheck,
        setIsVisibleCheck, order, setOrder, isOpen, setIsOpen, searchTitle, setSearchTitle, items, setItems
    }
}
export default useInitialState;