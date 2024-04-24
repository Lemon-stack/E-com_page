import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route,RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Catalogue from './Components/Products/Catalogue.jsx'
import Home from './Components/Home.jsx'
import Preview from './Components/Products/Preview.jsx'
import Product from './Components/Products/Product.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
 import Admin from './Components/Admin.jsx'
 import Previews from './Components/Previews.jsx'
 import Create from './Components/Create.jsx'
 import Login from './Components/Login.jsx'
const router=createBrowserRouter(
	createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />}/>
    <Route path='products' element={<Catalogue />}>
    <Route index element={<Product />}/>
    <Route path='preview' element={<Preview />}/>
    <Route path=':id' element={<Preview />}/>
    </Route>
    <Route path='admin' element={<Admin />}>
    <Route path='login' element={<Login />}/>
    <Route path='dashboard' element={<Previews />}/>
    <Route path='create' element={<Create />}/>
    </Route>
    <Route path='*' element={<ErrorPage />}/>
     
    </Route>
		)
	)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <>
    <RouterProvider router={router} />
    </>
  </React.StrictMode>,
)


