import{useState} from 'react'
import{useNavigate} from 'react-router-dom'

export default function Login(){
const [passwordInput,setPasswordInput]=useState("")
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
const password = import.meta.env.VITE_PASSWORD;
const navigate=useNavigate();

 const submit=(e)=>{
 	e.preventDefault()
if(passwordInput==password){
 localStorage.setItem("accessToken", accessToken);
navigate("/admin/dashboard")
} else{navigate("/")}
 	
 }



	return(
<>
    <form 
    class="flex flex-col bg-white rounded-lg shadow-lg mx-4 mt-20 p-5"
    onSubmit={submit}>
    <label class="text-xl text-blue-500 mb-2 font-bold" for="password">Password</label>
    <input 
    class="px-3 py-2 text-gray-800 outline-0 rounded-lg bg-blue-100 w-full mb-3"
    type="text" id="password" onChange={(e)=>setPasswordInput(e.target.value)}/>
    <button
    class="bg-blue-500 text-gray-50 font-bold rounded-md w-full flex justify-center items-center text-md mt-4 py-2"
    type="submit">Submit</button>
    </form>
	
</>
		)
}