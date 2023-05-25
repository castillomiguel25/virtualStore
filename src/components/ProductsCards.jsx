import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import Card from '@components/Cards';

const ProductsCards = () => {
  const { searchTitle, setSearchTitle, items, filteredItems } = useContext(AppContext);

  const renderView = () => {
    if (searchTitle?.length > 0) {
      if (filteredItems?.length > 0) {
        return filteredItems?.slice(10, 20).map((item) => <Card key={item.id} data={item} />);
      } else {
        return (
          <div>
            <h3 className='mb-10'> El producto no coincide...</h3>
          </div>
        );
      }
    } else {
      return items?.slice(25, 50).map((item) => <Card key={item.id} data={item} />);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center relative mb-4 ">
        <h1 className="text-black dark:text-white">Productos Exclusivos</h1>
      </div>
      <div className="flex items-center justify-center mt-10 ">
        <input
          className="rounded-lg border border-black w-96  p-4 mb-4 focus:outline-none dark:text-black"
          type="text"
          placeholder="Buscar Producto"
          onChange={(event) => setSearchTitle(event.target.value)}
        />
      </div>
      <div className="lg:grid lg:grid-cols-3 place-items-center mt-5 w-full  px-10">{renderView()}</div>
    </div>
  );
};

export default ProductsCards;
