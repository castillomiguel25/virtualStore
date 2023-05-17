import React from 'react';
import Card from '@components/Cards';
import ProductsTwo from './Producttwo';
import { Tabs } from 'flowbite-react';

const ProductTabs = () => {
  return (
    <div className='my-10'>
      <Tabs.Group aria-label="Pills">
        <Tabs.Item active={true} title="Products 1" className='text-white dark:bg-emerald-500 bg-indigo-500'>
          <div className='flex'>
            <Card />
            <Card />
            <Card />
          </div>
        </Tabs.Item>
        <Tabs.Item title="Products 2" className=''>
          <div className='flex'>
            <ProductsTwo />
            <ProductsTwo />
            <ProductsTwo />
          </div>
        </Tabs.Item>
        <Tabs.Item title="Products 3" className='dark:bg-emerald-500 bg-indigo-500 text-white'>
          <div className='flex'>
          </div>
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
};

export default ProductTabs;
