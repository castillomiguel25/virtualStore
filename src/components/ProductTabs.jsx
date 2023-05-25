import React,{useContext} from 'react';
import ProductsCards from './ProductsCards';
import { Tabs } from 'flowbite-react';
import AppContext from '@context/AppContext';

const ProductTabs = () => {

  const { setSearchByCategory, searchByCategory } = useContext(AppContext);

  return (
    <div className="my-10 px-10">
      <Tabs.Group aria-label="Pills">
        <Tabs.Item active={true} title="Products 1" className="text-white dark:bg-emerald-500 bg-indigo-500">
          <div className="flex">
            <ProductsCards />
          </div>
        </Tabs.Item>
        <Tabs.Item onClick={() => setSearchByCategory('others')} title="Products 2" className="">
          <div className="flex">
            <ProductsCards />
          </div>
        </Tabs.Item>
        <Tabs.Item onClick={() => setSearchByCategory('clothes')} title="Products 3" className="dark:bg-emerald-500 bg-indigo-500 text-white">
          <div className="flex">
            <ProductsCards />
          </div>
        </Tabs.Item>
        <Tabs.Item onClick={() => setSearchByCategory('toys')} title="Products 4" className="dark:bg-emerald-500 bg-indigo-500 text-white">
          <div className="flex">
            <ProductsCards />
          </div>
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
};

export default ProductTabs;
