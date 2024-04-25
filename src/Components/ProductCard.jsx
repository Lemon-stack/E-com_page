import { useState } from 'react';
import supabase from './Products/supabaseClient.jsx'
export default function ProductCard({product}) {
  //const [isLoading,setIsLoading] = useState(false)
    const [ editing, setEditing ] = useState(false);
    const [ name, setName ] = useState(product.name);
    const [ description, setDescription ] = useState(product.description);
    const [ price, setPrice] = useState(product.price);
    const [ deleteConfirmation, setDeleteConfirmation ] = useState(false);
    
    async function updateProduct() {
    	//setIsLoading(true)
        try {
            const { data, error } = await supabase
                .from("product")
                .update({
                    name: name,
                    description: description,
                    price:price
                })
                .eq("id", product.id)
            //setIsLoading(false)
            if (error) throw error;
            window.location.reload();
        } catch (error) {
            alert(error.message);
        }
    	
    }
        
        
        async function deleteProduct() {
        try {
            const { data, error } = await supabase
                .from("product")
                .delete()
                .eq("id", product.id)
            
            if (error) throw error;
            window.location.reload();
        } catch (error) {
            alert(error.message);
        }
        
        
    }
    
    return(
    <div>
    
    {editing===false?
    <>
    <div class="flex flex-row mx-2 mt-4 shadow-sm rounded-lg">
    <img
    class="size-[9rem] rounded-l-lg"
    src={product.url} alt=""/>
    <div class="flex mx-4 flex-col">
    <h2 
    class="text-xl mt-3 font-bold text-blue-500">{product.name}</h2>
    <p>{product.description}</p>
    <p class="text-lg font-bold text-gray-800">NGN {product.price}</p>
    <div class="flex flex-row mt-3 items-center">
    <button 
    class="mr-2 bg-blue-500 text-white flex items-center justify-center rounded-md w-20 py-1"
    onClick={()=>setEditing(true)}>Edit</button>
    <button 
    class="flex items-center justify-center bg-red-500 text-gray-50 rounded-md w-20 py-1"
    onClick={()=>setDeleteConfirmation(true)}>Delete</button>
    </div>
    
    {deleteConfirmation && ( 
    <div class="m-0">
    <p class="mt-3 mb-2">Sure?</p>
    <div class="flex flex-row-reverse justify-center mb-3 items-center">
    <button
    class="flex items-center justify-center bg-red-600 text-gray-50 rounded-md w-20 border-2 border-red-500"
    onClick={()=>deleteProduct()}>Yes</button>
    <button
    class="mr-2 w-20 border-2 text-gray-500 border-gray-500 rounded-md"
    onClick={()=>setDeleteConfirmation(false)}>No</button>
    
    </div>
    
    </div>
    	)}
    </div>
    </div>
    </>
    : 
    <>
    <div class="flex flex-row mx-2 mt-4 shadow-sm rounded-lg">
    <img 
    class="size-[9rem] rounded-l-lg"
    src={product.url} 
    alt=""/>
    <div class="py-3 flex mx-4 flex-col justify-items-start">
    <form class="flex flex-col" action="">
    <label class="text-sm -mt-2 font-bold text-blue-500">ProductName</label>
    <input type="text"
    class="outline-0 bg-blue-100 rounded-sm px-2 py-1"
    defaultValue={product.name}
    id="name"
    onChange={(e) => setName(e.target.value)}
    />
    <label class="text-sm mt-3 font-bold text-blue-500">Description</label>
    <input type="text"
    class="outline-0 bg-blue-100 rounded-sm px-2 py-1"
    defaultValue={product.description}
    id="description"
    onChange={(e) => setDescription(e.target.value)}
    />
    <label class="text-sm mt-3 font-bold text-blue-500">Price</label>
    <input type="number"
    class="outline-0 bg-blue-100 rounded-sm px-2 py-1"
    defaultValue={product.price}
    id="price"
    onChange={(e) => setPrice(e.target.value)}
    />
    
    </form>
    
    <div class="flex flex-row mt-3">
    <button 
    class="mr-2 w-20 border-2 text-gray-500 border-gray-500 rounded-md"
    onClick={()=>setEditing(false)}>cancel</button>
    <button 
    class="bg-blue-500 text-white flex items-center justify-center rounded-md w-20 py-1"
    onClick={()=>updateProduct()}>Update</button>
    </div>
    
    </div>
    </div>
    </>
    }
   </div> 
    )
}