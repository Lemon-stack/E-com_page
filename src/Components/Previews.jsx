import {useState} from 'react'
import useFetchProduct from "./Products/useFetchProduct.jsx"
import ProductCard from "./ProductCard.jsx"
export default function Admin(){
	const { error, isLoading, products } = useFetchProduct("product")
	return(
		<>
		{error && <div>here's an error</div>}
  {products && products?.map(product => (
   <ProductCard key={product.id} product={product}/>
    ))}
  </>
		)
}