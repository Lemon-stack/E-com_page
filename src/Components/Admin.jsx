import{Outlet,Navigate} from 'react-router-dom'
// import {AuthProvider} from './Providers/AuthProvider.jsx'
export default function Admin(){
  
	return(
		<>
    <Navigate to="/admin/dashboard"></Navigate>
		<Outlet/>
		</>
		)
}