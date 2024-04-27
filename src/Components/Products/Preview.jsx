import * as React from "react";
import supabase from "./supabaseClient.jsx";
import useFetchProduct from "./useFetchProduct.jsx";
import { useParams} from "react-router-dom";
import handleEnquiry from './WhatsAppUtils.jsx';
export default function Preview(){
  const { id } = useParams();
  const { products, error, isLoading } = useFetchProduct('product');
  const handleEnquireClick = (phoneNumber, name, price) => {
    handleEnquiry(phoneNumber, name, price);
  };
//store the products.name in a variable for the conversion
    
    // since the data retrieved from from the
    // products[id-1] is done because recieved dataa is an array but the actual id to begin with is 1
	return(
		<>
      { isLoading && 
<div role="status" class="flex justify-center items-center">
    <svg aria-hidden="true" class="w-16 h-16 mx-auto my-60 text-gray-200 animate-spin dark:text-gray-200 fill-blue-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
 }
      { error && <div>{ error }</div> }
     {products && (
        
          <div class="flex flex-col items-start bg-gray-50 p-2 m-2 rounded-lg shadow-lg">
     <img src={products[id-1].url} class="size-[21rem] object-cover rounded-lg" alt=""/>
     <div class="flex-col float-left mt-4 ml-4">
     <h3 class="font-bold text-blue-500 text-xl">Name: {products[id - 1].name}</h3>
         <span class="text-lg">{products[id - 1].description}</span>
         <div class="text-lg">{products[id - 1].price}</div>
        </div>
        <div class="flex flex-row items-center justify-between mx-2">
         <button 
     onClick={()=>handleEnquireClick('09165609408', products[id-1].name, products[id-1].price)}
     class="flex flex-row items-center justify-center px-4 py-1 bg-blue-400 text-gray-50 rounded-lg mt-3 mr-3 shadow-lg">Enquire
     <svg class="w-[20px] h-[20px] ml-1 text-gray-50 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="hsl(210, 20%, 98%)" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
  <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
</svg>
     </button>
         <button class="px-4 py-1 bg-blue-400 text-gray-50 rounded-lg mt-3 shadow-lg items-end">Add to Cart</button>
        </div>
        </div>
       
        
      )}
     {/*<Outlet/>*/}
    </>
		)
}