import React from 'react'

const Navbar = () => {
  return (

    <div className=' w-full flex items-center p-5 bg-zinc-200'>
            <div className=" mr-10 px-10">
              <img src="/logo.png" alt="logo" className='w-10 cursor-pointer' />
            </div>
            <ul className='flex gap-10 font-medium'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Categories</li>
                <li className='cursor-pointer'>About Us</li>
            </ul>

    </div>

  )
}

export default Navbar