import React, { useState , useEffect } from 'react'
import nikeShoes from './Data'
import ShoeCard from './ShoeCard'
import CartCard from './CartCard'

const Hero = () => {

  const [cartData, setCartData] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  function handleAddToCart(val) {
    setCartData((prevData) => {
      const flag = prevData.find((item) => item.name === val.name);
      if (flag) {
        return prevData.map((item) =>
          item.name === val.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevData, { ...val, quantity: 1 }];
      }
    });
  }


  function handleIncrement(name) {
    setCartData((prevData) =>
      prevData.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function handleDecrement(name) {
    setCartData((prevData) =>
      prevData
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }
  



  useEffect(() => {
    const total = cartData.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setCartTotal(total);
  }, [cartData]);


  return (
    <div className='w-full flex justify-between' >



      <div className=' w-[70%] p-10  flex flex-wrap  justify-left gap-6'>
        {nikeShoes.map((val, idx) => <ShoeCard key={idx} imageUrl={val.image} name={val.name} price={val.price} onClick={() => handleAddToCart(val)} />)}
      </div>



      <div className=' w-[30%] py-10  bg-orange-100 flex flex-col px-5'>
        <h1 className='font-bold text-xl mb-2' >Cart</h1>

        <div className='flex flex-col gap-2 py-5'>
          {cartData.map((val, idx) => <CartCard key={idx} imageUrl={val.image} name={val.name} price={val.price} q={val.quantity} incFunc={() => handleIncrement(val.name)} decFunc={()=>handleDecrement(val.name)}  /> ) }
        </div>

        <div className='flex justify-center text-xl font-medium my-3'>
          Total: ${cartTotal.toFixed(2)}
        </div>
      </div>




    </div>
  )
}

export default Hero