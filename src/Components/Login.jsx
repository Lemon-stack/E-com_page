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


/*const AdminView = () => {
const [Authed,setAuthed]=useState(false)
 if (!isAuthed) {
 // push to sign in
 }
const sessionCookie = localStorage.getItem("accessToken")
const isAuthed = sessionCookie === accessToken;

 
 return <AdminDataComponent />
}

const email = "user@.com"
const password = "liuweiuo"
*/
/*Admin logs in with the correct credentials,
http://yourdomain.com/login
http://yourdomain.com/admin*/

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