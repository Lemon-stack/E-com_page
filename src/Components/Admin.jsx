import{Outlet,useNavigate} from 'react-router-dom'
import {AuthProvider} from './Providers/AuthProvider.jsx'
export default function Admin(){
  const navigate=useNavigate();
  navigate('/admin/login')
	return(
		<>
		 <AuthProvider>
		<Outlet/>
		 </AuthProvider>
		</>
		)
}