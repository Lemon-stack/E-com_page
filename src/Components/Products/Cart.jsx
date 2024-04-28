import React, { useEffect, useState } from 'react';
import {Link,useNavigate} from 'react-router-dom'

const Cart = () => {
    // State to store cart items
    const [cartItems, setCartItems] = useState([]);
     const navigate = useNavigate();

  const handleCheckout = (item) => {
    navigate('/checkout',{state: { selectedItem: item }});
  };
  
    useEffect(() => {
        if (!localStorage.getItem("cart")) {
            localStorage.setItem("cart", JSON.stringify([]));
        }

    
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCartItems);
    }, []);

const handleDeleteItem = (index) => {
        const updatedCartItems = [...cartItems];

        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    };
    
    return (
    	<>
      <div class="px-5 py-2 flex flex-row justify-between">
         <h2 class="font-bold text-blue-500 text-xl">Your Cart</h2>
         <p>Items ({cartItems.length})</p>
      </div>
        <div class="flex flex-row justify-items-start items-center bg-gray-50 p-2 m-2 rounded-lg shadow-lg">
            <div className="cart-items">
                {cartItems.map((item, index) => (
                    <div key={index} class="flex flex-row mb-5">
                        <img src={item.url} alt={item.name} class="size-[9rem] object-cover rounded-lg justify-self-start" />
                        <div class="flex-col ml-3 mt-2">
                            <h4 class="font-bold text-blue-500 text-lg">{item.name}</h4>
                            <p>{item.description}</p>
                            <p class="font-extrabold">NGN {item.price}</p>
                       
                       
                        <button onClick={()=>handleCheckout(item)} class="px-4 py-1 bg-blue-400 text-gray-50 rounded-lg mt-1 shadow-lg">Checkout</button>
                      
                        </div>

                        <svg 
                        onClick={()=>handleDeleteItem(index)}
                        class="w-[30px] h-[30px] ml-8 text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>
                    </div>
                ))}
            </div>
            {cartItems.length === 0 && 
            <div class="p-3 ">
            <h3 class="font-bold text-blue-500 text-xl">Seems like it's a bit empty here</h3>
            <p>Add products to view them in your cart</p>
            </div>}
        </div>
        </>
    );
};

export default Cart;
