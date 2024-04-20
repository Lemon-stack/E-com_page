//import useFetchProduct from './useFetchProduct.jsx'
//import useProductpre"./useProductpreview.jsx";
import { useParams,Outlet} from "react-router-dom";

export default function Preview(){
  const { id } = useParams();
  //const { products, error, isPending } = useFetchProduct('product');

	return(
		<>
	  	<div>
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
     {/* {product && <div>{prpducts}</div>}*/}
    </div>
    <Outlet/>
    </>
		)
}