import supabase from './Products/supabaseClient.jsx'
import {useState,useEffect} from 'react'

import {useNavigate} from 'react-router-dom'
export default function Create(){
	const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

	const sessionCookie = localStorage.getItem("accessToken")
	const navigate=useNavigate();
const isAuthed = sessionCookie === accessToken;
if(!isAuthed){ navigate('/admin/login')}

	const[error, setError]=useState(null)
	const[uploadError, setUploadError]=useState(null)
	
	const [productName, setProductName ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ price, setPrice] = useState("");
  
 // const [ products, setProducts] = useState([]);
  // stages to create new product
  const [getName,setGetName]=useState(false);
  const [getImage,setGetImage]=useState(false);
  const [getRestDetails,setGetRestDetails]=useState(false);
  
  
  //check if product name was filled filled
  const [inputFilled,setInputFilled]=useState(false);
  
  // image to be uploaded to backend
  const [image,setImage]=useState(null);
  const [previewSrc, setPreviewSrc] =useState(null);
console.log(image)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    setImage(file)
    //setImage({file:file,name:productName.toLowerCase().replace(/\s/g,'')});

    reader.onloadend = () => {
      console.log({ imageUrl: reader.result });
      setPreviewSrc(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
     
    }
  };
  
  useEffect(() =>setGetName(true) , []);
  // upload image
   const submit=async(e)=>{
   	e.preventDefault();
   	const { data, error } = await supabase.storage
      .from("productImg")
      .upload(`gadget/${productName.toLowerCase().replace(/\s/g,'')}`, image, {
        upsert: true,
      });
      setError(error)
    
    const {data: imageUrlData } = supabase.storage
      .from("productImg")
      .getPublicUrl(`gadget/${productName.toLowerCase().replace(/\s/g,'')}`);
      
      const imgSrcToBeUploadedToBakend = imageUrlData.publicUrl;
      console.log(imgSrcToBeUploadedToBakend)
      
      const { data:product, error:productError } = await supabase
        .from("product")
        .insert({
          name: productName,
          description: description,
          price:price,
          url:imgSrcToBeUploadedToBakend
        })
       navigate('/admin/dashboard')
      if (productError) setUploadError(productError)
  
   }
   
  return(
   <>
   
   {error && <div>error</div>}
   {uploadError && <div>error</div>}
   <div>
   <form onSubmit={submit}>
   {getName && ( 
   <div>
   <label>Product Name</label>
   <input type="text"
   id="name"
   required
   onChange={(e) => {
   	setProductName(e.target.value) 
   	setInputFilled(true)
   }}
   />
   <button disabled={!inputFilled} onClick={()=>{
   	
   	setGetName(false)
   	setGetImage(true)
   }}>Next</button>
   </div>
   	)}
   	{getImage && (
   <div>
      <label for="image">Upload image</label>
      <input
        type="file"
        id="image"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />

      <img src={previewSrc} alt="" height={150} width={150} />

      <button onClick={()=>{
      	setGetImage(false)
      	setGetRestDetails(true)
      }}>
        Next
      </button>
   </div>
   		)}
   		
   	{getRestDetails && (
   		 <div>
   <label>Description</label>
   <textarea
   id="description"
   cols="30"
   rows="6"
   onChange={(e) => {
   	setDescription(e.target.value) 
   }}
   ></textarea>
   
   <label>Price</label>
   <input type="number"
   id="price"
   required
   onChange={(e) => {
   	setPrice(e.target.value) 
   }}
   />
   <button type="submit">Next</button>
   
   </div>
   	)}
   	
   </form>
   </div>
   </>
  	)
}