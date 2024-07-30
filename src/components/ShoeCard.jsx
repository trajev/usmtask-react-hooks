import React from 'react'

const ShoeCard = ( { imageUrl, name, price, onClick} ) => {
  return (
    <div className='w-[20vw] bg-gray-100 rounded-md p-3 py-3 flex flex-col items-center gap-2 border border-gray-300'>
        
        <div className='w-full h-52 bg-blue-200 my-2 rounded-md'>
            <img src={"https://"+imageUrl} alt="shoe-image" className='w-full h-full object-cover ' />
        </div>

        <div className='flex w-full justify-between'>
            <h3 className='w-[80%] '>{name}</h3>
            <h2 className='font-bold text-red-500'> &#x24;{price} </h2>
        </div>

        <button onClick={onClick} className='px-4 py-1 my-2 text-sm font-medium hover:bg-zinc-200 border-zinc-500 border '>Add to Cart</button>


    </div>
  )
}

export default ShoeCard