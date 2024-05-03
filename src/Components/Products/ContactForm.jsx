import React, {useRef,useState} from 'react';
import emailjs from '@emailjs/browser';
import {useLocation,useNavigate} from 'react-router-dom'
const ContactForm = () => {
/*	const navigate=useNavigate();
	const [success, setSuccess]=useState(false)
	const [error, setError]=useState(false)
	const form = useRef();
  const location = useLocation();
  const selectedItem = location.state?.selectedItem;

  const sendEmail = (e) => {
    e.preventDefault();
   const service_id=import.meta.env.VITE_SERVICE_ID;
   const template_id=import.meta.env.VITE_TEMPLATE_ID;
   const public_key= import.meta.env.VITE_PUBLIC_KEY;
   
    emailjs.sendForm(service_id, template_id, form.current, {
    	publicKey: public_key,
      })
      .then((result) => {
        setTimeout(function() {
        	setSuccess(true)
        }, 100);
        navigate(-1)
      }, (error) => {
        setTimeout(function() {
        	setError(true)
        }, 100);
      });
   
  };
  */

  return (
  	<>
    {/*{success && 
    <div class="px-3 py-1 float-right text-blue-500 shadow-md animate-bounce bg-gray-50">
    your Order has been placed
    </div>}
    {error && 
    <div class="px-3 py-1 float-right text-blue-500 shadow-md animate-bounce bg-red-100">
    Oops! pls refresh & try again
    </div>}
    <h3 class="mx-6 mt-3 text-2xl text-blue-500 font-bold">Checkout</h3>
    <form ref={form} class="flex flex-col py-6 px-6 mt-2 mx-4 bg-white shadow-md md:mx-64 md:rounded-xl rounded-lg" onSubmit={sendEmail}>
      <label class="flex flex-col items-start justify-center text-blue-500 text-lg font-bold">
        Name:
        <input 
        class="p-2 text-gray-800 outline-0 rounded-lg bg-blue-100 w-full mb-3"
        type="text" name="name" required />
      </label>
      <label class="flex flex-col items-start justify-center text-blue-500 text-lg font-bold">
        Email:
        <input class="p-2 outline-0 rounded-lg bg-blue-100 text-gray-800 w-full mb-3" type="email" name="email" required />
      </label>
      <label class="flex flex-col items-start justify-center text-blue-500 text-lg font-bold">
        Residential Address:
        <input class="p-2 outline-0 rounded-lg bg-blue-100 text-gray-800 w-full mb-3" type="text" name="address" required />
      </label>
      <label class="flex flex-col items-start justify-center text-blue-500 text-lg font-bold">
        State of Origin:
        <input class="p-2 outline-0 rounded-lg bg-blue-100 text-gray-800 w-full mb-3" type="text" name="state" required />
      </label>
      <label class="flex flex-col items-start justify-center text-blue-500 text-lg font-bold">
        Phone Number:
        <input class="p-2 outline-0 rounded-lg bg-blue-100 text-gray-800 w-full mb-3" type="tel" name="phone" required />
      </label>
      <label class="flex flex-col items-start justify-center text-blue-500 text-lg font-bold">
        Product Name:
        <input class="p-2 outline-0 rounded-lg bg-blue-100 w-full text-gray-800 mb-3" type="text" name="productName"  defaultValue={selectedItem?.name || ""} required />
      </label>
      <label class="flex flex-col items-start justify-center text-blue-500 text-lg font-bold">
        Product Price:
        <input class="p-2 outline-0 rounded-lg bg-blue-100 w-full text-gray-800 mb-3" type="text" name="productPrice"  defaultValue={selectedItem?.price || ""} required />
      </label>
      <label class="flex flex-col items-start justify-center text-blue-500 text-lg font-bold">
        Product Amount:
        <input class="p-2 outline-0 rounded-lg bg-blue-100 text-gray-800 w-full mb-3" type="number" name="productAmount" required />
      </label>
      <button 
      class="bg-blue-500 text-gray-50 py-2 w-full text-lg mt-3 font-bold rounded-md"
      type="submit">Submit</button>
    </form>*/}
    <div class="text-xl text-blue-500 font-bold p-4">I just thought i should share, no need to actually send it</div>
    
    </>
  );
};

export default ContactForm;