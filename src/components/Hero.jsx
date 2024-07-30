import React, { useState } from 'react'
import nikeShoes from './Data'
import ShoeCard from './ShoeCard'
import CartCard from './CartCard'

const Hero = () => {

  const [cartData, setCartData] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  

  function handleAddToCart( val ){

    // let flag = cartData.find( item => item.name===val.name );

    // // console.log( flag )

    // if( flag ){
    //   setCartData( [...cartData, {...val, quantity: val.quantity+1}] ) 
    // } else {
    //   setCartData( [...cartData, {...val, quantity: 1} ] )

    // }

    // setCartTotal( cartTotal+val.price )


    for(let i=0; i<cartData.length; i++ ){
      if( cartData[i].name==val.name ){
        return;
      }
    }

    setCartData( [...cartData, {...val, quantity: 1} ] );
    setCartTotal( cartTotal + val.price );


  }



  return (
    <div className='w-full flex justify-between' >



      <div className=' w-[70%] p-10  flex flex-wrap  justify-left gap-6'>
        {nikeShoes.map((val, idx) => <ShoeCard key={idx} imageUrl={val.image} name={val.name} price={val.price} onClick={()=>handleAddToCart(val)} />)}
      </div>



      <div className=' w-[30%] py-10  bg-orange-100 flex flex-col px-5'>
        <h1 className='font-bold text-xl mb-2' >Cart</h1>

        <div className='flex flex-col gap-2 py-5'>
          {cartData.map((val, idx) => <CartCard key={idx} imageUrl={val.image} name={val.name} price={val.price} cartData={cartData} setCartData={setCartData} cartTotal={cartTotal} setCartTotal={setCartTotal} />)}
        </div>

        <div className='flex justify-center text-xl font-medium my-3'>
          Total: ${cartTotal}
        </div>
      </div>




    </div>
  )
}

export default Hero