import React, { useContext } from 'react'
import AppContext from '@context/AppContext';
import Card from '@components/Cards';

const ProductsCards = () => {

    const { searchTitle, setSearchTitle, items, setItems } = useContext(AppContext);

    return (
        <div>
            <div className="flex items-center justify-center relative  mb-4">
                <h1 className="text-black black:text-white">Productos Exclusivos</h1>
            </div>

            <div className='flex items-center justify-center mt-10'>
                <input className="rounded-lg border border-black w-80  p-4 mb-4 focus:outline-none"
                    type="text"
                    placeholder="Buscar Producto"
                    onChange={(event) => setSearchTitle(event.target.value)}
                />
            </div>

            <div className="lg:grid lg:grid-cols-3 place-items-center mt-5 w-full  px-10">
                {items?.slice(100, 125).map(item => (
                    <Card key={item.id} data={item} />
                ))}
            </div>
        </div>
    )
}

export default ProductsCards