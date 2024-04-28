import supabase from './Products/supabaseClient.jsx'
import {useState,useEffect} from 'react'

import {useNavigate} from 'react-router-dom'
export default function Create(){
	const navigate=useNavigate();
	const[error, setError]=useState(null)
	const[uploadError, setUploadError]=useState(null)
	
	const [productName, setProductName ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ details, setDetails ] = useState("");
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
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    setImage(file)
    //setImage({file:file,name:productName.toLowerCase().replace(/\s/g,'')});

    reader.onloadend = () => {
      //console.log({ imageUrl: reader.result });
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
   	navigate("/admin/dashboard")
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
      
      
      const { data:product, error:productError } = await supabase
        .from("product")
        .insert({
          name: productName,
          description: description,
          price:price,
          url:imgSrcToBeUploadedToBakend,
          details:details,
        })
        
       
      if (productError) setUploadError(productError)
   }
   
  return(
   <>
   
   {error && <div>error</div>}
   {uploadError && <div>error</div>}
   <div class="p-5 shadow-lg rounded-lg mt-4 mx-2">
   <form onSubmit={submit}>
   {getName && ( 
   <div class="flex flex-col">
   <label class="text-blue-500 text-2xl font-bold mb-3">Product Name</label>
   <input type="text"
   class="border-2 border-blue-500 rounded-md p-2 outline-0 "
   id="name"
   required
   onChange={(e) => {
   	setProductName(e.target.value) 
   	setInputFilled(true)
   }}
   />
   <button
   class="mx-auto w-1/2 font-medium text-gray-50 py-2 rounded-lg mt-4 bg-blue-500 hover:bg-blue-600 outline-0 flex justify-center items-center"
   disabled={!inputFilled} 
   onClick={()=>{
   	setGetName(false)
   	setGetImage(true)
   }}>Next</button>
   </div>
   	)}
   	{getImage && (
   <div class="flex flex-col items-start">
     <h2 class="text-blue-500 text-2xl font-bold mb-3">Upload Image</h2>
      <img src={previewSrc} 
      class="border-2 border-blue-500 rounded-t-md outline-0 mx-auto"
      alt="" height={310} width={310} />
      
      <label 
      class="bg-blue-500 hover:bg-blur-700 text-gray-50 rounded-b-md text-md p-2 font-bold mb-3 mx-auto w-full flex justify-center items-center"
      for="image"
      >Browse Files</label>
      <input type="file"id="image"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />

      <button 
      class="bg-white text-blue-500 rounded-md text-md p-2 outline-0 border-blue-500 border-2 font-bold mt-3 mx-auto w-full flex justify-center items-center"
      onClick={()=>{
      	setGetImage(false)
      	setGetRestDetails(true)
      }}>
        Next
      </button>
   </div>
   		)}
   		
   	{getRestDetails && (
   		 <div class="flex flex-col justify-items-start">
   <label class="text-blue-500 text-xl font-bold mb-3">Description</label>
   <textarea
   class="border-2 border-blue-500 rounded-md p-2 outline-0 mb-4"
   id="description"
   cols="30"
   rows="3"
   required
   onChange={(e) => {
   	setDescription(e.target.value) 
   }}
   ></textarea>
   
   <label class="text-blue-500 text-xl font-bold mb-3">Details</label>
   <textarea
   class="border-2 border-blue-500 rounded-md p-2 outline-0 mb-4"
   id="details"
   cols="30"
   rows="6"
   onChange={(e) => {
   	setDetails(e.target.value) 
   }}
   ></textarea>
   
   <label class="text-blue-500 text-xl font-bold mb-3">Price</label>
   <input type="number"
   class="border-2 border-blue-500 rounded-md p-2 outline-0 "
   id="price"
   required
   onChange={(e) => {
   	setPrice(e.target.value) 
   }}
   />
   <button 
   class="mx-auto w-1/2 font-medium text-gray-50 py-2 rounded-lg mt-4 bg-blue-500 hover:bg-blue-600 outline-0 flex justify-center items-center"
   type="submit">Create</button>
   
   </div>
   	)}
   	
   </form>
   </div>
   </>
  	)
}