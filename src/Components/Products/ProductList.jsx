import { Link } from 'react-router-dom';

// map thrpugh the product gotten from 'Product.jsx' and output them based on the values we need
function ProductList({product}){
  return (
  <div>
 {product.map(item=>(
  <Link to={`/products/${item.id}`} key={item.id}>
     <div class="flex flex-row justify-items-start items-center bg-gray-50 p-2 m-2 rounded-lg shadow-lg">
     <img src="./src/assets/pic1.jpg" class="w-32 justify-self-start" alt=""/>
     <div class="flex-col ml-5">
     <h3 class="font-bold text-blue-500 text-lg">{item.name}</h3>
     <span>description</span>
     <p class="font-extrabold">NGN {item.price}</p>
     <button class="px-4 py-1 bg-blue-400 text-gray-50 rounded-lg mt-3 shadow-lg">Add to Cart</button>
     </div>
     </div>
  </Link>
  ))}
  </div>

  )
}
 
 
export default ProductList;