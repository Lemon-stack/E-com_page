import { Link } from 'react-router-dom';
import handleEnquiry from './WhatsAppUtils.jsx';
function ProductList({product}){
	console.log(product)
	const handleEnquireClick = (phoneNumber, name, price) => {

    handleEnquiry(phoneNumber, name, price);
  };

 const addToCart = (item) => {
    // Using localStorage to store items in the cart
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  return (
  <div class="md:grid md:grid-cols-2 md:gap-2">
 {product.map(item=>(
 	
 	
  <Link to={`/products/${item.id}`} key={item.id}>
     <div class="flex flex-row justify-items-start items-center bg-gray-50 p-2 m-2 rounded-lg md:-mb-2 shadow-lg">
     <img src={item.url} class="size-[9rem] object-cover rounded-lg justify-self-start" alt=""/>
     <div class="flex-col ml-5">
     <h3 class="font-bold text-blue-500 text-lg">{item.name}</h3>
     <span>{item.description}</span>
     <p class="font-extrabold">NGN {item.price}</p>
     <div>
     <button 
     onClick={()=>handleEnquireClick('+2347054074103', item.name, item.price)}
     class="flex flex-row items-center justify-center px-4 py-1 bg-blue-500 text-gray-50 rounded-lg mt-3 shadow-lg">Enquire
     <svg class="w-[20px] h-[20px] ml-1 text-gray-50 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="hsl(210, 20%, 98%)" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
  <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
</svg>
     </button>
     
     <button 
     onClick={()=>
     	addToCart(item)}
     class="px-4 py-1 bg-blue-500 text-gray-50 rounded-lg mt-3 mb-2 shadow-lg">Add to Cart</button>
     </div>
     </div>
     </div>
  </Link>
  ))}
  </div>

  )
}
 
 
export default ProductList;