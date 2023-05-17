import { useState } from "react";

const useInitialState = () => {

    // Shopping Cart · Increment quantity
    const [count, setCount] = useState(0)

    // logica para mostrar productos
    const [productToShow, setProductToShow] = useState({})

    // logica para cerrar productos
    const [isVisible, setIsVisible] = useState(true);
   
    // logica para un carrito
    const [productCart, setProductCart] = useState([])
    const [isVisibleCheck, setIsVisibleCheck] = useState(true);

    return {
        setProductCart, productCart, productToShow, setProductToShow, count, setCount, isVisible, setIsVisible, isVisibleCheck,
        setIsVisibleCheck
    }
}
export default useInitialState;