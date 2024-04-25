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
	console.log("in!")
 localStorage.setItem("accessToken", accessToken);
navigate("/admin/dashboard")
} else{navigate("/")}
 	
 }



	return(
<>
    <form onSubmit={submit}>
    <label for="password">Password</label>
    <input type="text" id="password" onChange={(e)=>setPasswordInput(e.target.value)}/>
    <button type="submit">Submit</button>
    </form>
	
</>
		)
}