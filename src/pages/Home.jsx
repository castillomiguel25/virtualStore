import React from "react";
import { useState, useEffect } from 'react'
import useInitialState from "../hooks/useInitialState";
import AppContext from "@context/AppContext";
import Layout from '@containers/Layout';
import Card from '@components/Cards';

const Home = () => {
  const [items, setItems] = useState(null)
  const initialState = useInitialState();

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  return (
    <>
      <AppContext.Provider value={initialState}>
        <Layout>
         <div className="lg:grid lg:grid-cols-3 mx-10 place-items-center">
            {
              items?.map(item => (
                <Card key={item.id} data={item} />
              )).slice(4, 28)
            }
          </div>
        </Layout>
      </AppContext.Provider>
    </>
  );
};

export default Home;
