import ProductList from "./ProductList.jsx";
import useFetchProduct from "./useFetchProduct.jsx"

export default function ProductCard(){
	const { error, isLoading, products } = useFetchProduct("product")
	return(
		<>
		      { error && <div>{ error }</div> }
      { isLoading && <div>Loading...</div> }
    {products && <ProductList product={products} /> }
    
  </>
		)
}