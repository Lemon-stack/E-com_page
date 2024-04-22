import * as React from "react";
import supabase from "./supabaseClient.jsx";
import useFetchProduct from "./useFetchProduct.jsx";
import { useParams} from "react-router-dom";

export default function Preview(){
  const { id } = useParams();
  const { products, error, isLoading } = useFetchProduct('product');
  const{productName,setProductName}=React.useState(null)
//store the products.name in a variable for the conversion
    
    // since the data retrieved from from the
    // products[id-1] is done because recieved dataa is an array but the actual id to begin with is 1
	return(
		<>
      { isLoading && <div>Loading...</div> }
      { error && <div>{ error }</div> }
     {products && (
        
          <div class="flex flex-col items-start bg-gray-50 p-2 m-2 rounded-lg shadow-lg">
     <img src={products[id-1].url} class="w-96 rounded-lg" alt=""/>
     <div class="flex-col float-left mt-4 ml-4">
     <h3 class="font-bold text-blue-500 text-xl">Name: {products[id - 1].name}</h3>
         <span class="text-lg">{products[id - 1].description}</span>
         <div class="text-lg">{products[id - 1].price}</div>
        </div>
         <button class="px-4 py-1 bg-blue-400 text-gray-50 rounded-lg mt-3 shadow-lg items-end">Add to Cart</button>
        </div>
       
        
      )}
     {/*<Outlet/>*/}
    </>
		)
}