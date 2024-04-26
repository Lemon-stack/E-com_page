import{useLocation, Navigate} from 'react-router-dom'

export const AuthProvider = ({ children }) => {
 const pathname = location.pathname;
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

	const sessionCookie = localStorage.getItem("accessToken")
const isAuthed = sessionCookie === accessToken;


if (pathname.includes("/dashboard") && isAuthed) {
return <div>{children}</div>
}

if (pathname.includes("/dashboard") && !isAuthed) {
return <Navigate to='/admin/login'></Navigate>
}

return <div>{children}</div>
}