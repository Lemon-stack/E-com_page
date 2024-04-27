import React, { useEffect, useState } from 'react';


const Cart = () => {
    // State to store cart items
    const [cartItems, setCartItems] = useState([]);
    
    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCartItems);
    }, []);

    return (
    	<>
      <div class="px-5 py-2 flex flex-row justify-between">
         <h2 class="font-bold text-blue-500 text-xl">Your Cart</h2>
         <p class="">Items ({cartItems.length})</p>
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
                        
                        <button class="px-4 py-1 bg-blue-400 text-gray-50 rounded-lg mt-7 shadow-lg">Checkout</button>
                        </div>
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
