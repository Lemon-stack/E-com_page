import {useState} from 'react'
import{useNavigate} from 'react-router-dom'
import useFetchProduct from "./Products/useFetchProduct.jsx"
import ProductCard from "./ProductCard.jsx"

export default function Previews(){
	const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

	const sessionCookie = localStorage.getItem("accessToken")
	const navigate=useNavigate();
const isAuthed = sessionCookie === accessToken;
if(!isAuthed){ navigate('/admin/login')}
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