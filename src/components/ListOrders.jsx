import React from 'react'
import close from '@icons/icon_close.png'
import Image from 'next/image';

const ListOrders = props => {

    const { totalPrice, totalProducts } = props

    let imageDelete
    if (handleDelete) {
      imageDelete = <Image onClick={() => handleDelete (id)} className='h-3 w-3' src={close} alt="closed-order-card" />
    }

  return (
    <div className="flex justify-between items-center mb-3 px-3 border-black">
      <div className='flex items-center gap-2'>
        <p className='text-lg text-black dark:text-black font-medium'>${totalProducts}</p>
        <p className='text-lg text-black dark:text-black font-medium'>${totalPrice}</p>
        {/* { imageDelete } */}
      </div>
    </div>
  )
}

export default ListOrders