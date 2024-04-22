import ProductList from "./ProductList.jsx";
import useFetchProduct from "./useFetchProduct.jsx"

export default function Product(){
	const { error, isLoading, products } = useFetchProduct("product")
	console.log(products)
	// get productlist from supabase and then set the props of productList to 'products'
	return(
		<>
		      { error && <div>{ error }</div> }
      { isLoading && <div>Loading...</div> }
    {products && <ProductList product={products} /> }
    
  </>
		)
}