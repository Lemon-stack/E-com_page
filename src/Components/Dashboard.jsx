import{Outlet} from 'react-router-dom'
import {AuthProvider} from './Providers/AuthProvider.jsx'
export default function Dashboard(){
	
	return(
		<>
  <AuthProvider>
		<Outlet/>
  </AuthProvider>
		</>
		)
}