import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png'
import Image from 'next/image';
import OrderCards from './OrderCards';
import { totalPrice } from '../utils/index'

const CheckoutSide = () => {

	const { productCart, setProductCart, isVisibleCheck, setIsVisibleCheck } = useContext(AppContext);

	const handleCloseCheck = () => {
		setIsVisibleCheck(false);
	  };
	
	  if (!isVisibleCheck) {
		return false; 
	  }

	const handleDelete = (id) => {
		const filteredProducts = productCart.filter(product => product.id != id)
		setProductCart(filteredProducts)
	}
	return (
		<aside className="MyOrder flex flex-col fixed right-0 border border-black bg-white rounded overflow-x-hidden overflow-y-auto">
			<div className="flex justify-between items-center mx-5">
				<Image onClick={handleCloseCheck} src={close} alt="closed my order" />
				<p className="font-bold dark:text-black">My order</p>
			</div>
			{
				productCart.map(product => (
					<OrderCards
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						images={product.images}
						handleDelete={handleDelete}
					/>
				))
			}
			<div className='px-6'>
				<p className='flex justify-between items-center'>
					<span className='text-black dark:text-black'>Total:</span>
					<span className='text-black dark:text-black text-2xl'>${totalPrice(productCart)}</span>
				</p>
			</div>
		</aside>
	);
}

export default CheckoutSide;
