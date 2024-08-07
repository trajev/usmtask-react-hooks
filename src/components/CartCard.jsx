import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaCircleMinus } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";

const CartCard = ( { imageUrl, name, price, q, incFunc, decFunc } ) => {




  return (
    <div className='w-full flex items-center bg-zinc-100 rounded-xl border border-zinc-400 overflow-hidden '>
      <img src={"https://" + imageUrl} alt="shoe-image" className='w-[8vw] h-[7vw]' />

      <div className='flex flex-col justify-between w-full'>
        <div className='py-2 flex w-full pr-2'>
          <h3 className='flex flex-wrap w-[75%]'> {name} </h3>
          <h6 className='text-black-500 italic text-center font-medium w-[25%]'> ${ price*q } </h6>
        </div>

        <div className='py-2 flex w-full pr-2'>
          <div className='flex flex-wrap pl-5 gap-2 font-bold w-[75%]'> 
            <button onClick={ decFunc } > <FaCircleMinus /> </button>
            {q}
            <button onClick={ incFunc } > <FaPlusCircle /> </button>  
          </div>
          {/* <button onClick={ handleDelete } className='text-xl text-red-600 w-[25%] cursor-pointer flex justify-center'> <MdDelete /> </button> */}
        </div>
      </div>

    </div>
  )
}

export default CartCard