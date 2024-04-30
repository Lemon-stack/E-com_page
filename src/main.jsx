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
 import Dashboard from './Components/Dashboard.jsx'
 import Create from './Components/Create.jsx'
 import Previews from './Components/Previews.jsx'
 import Login from './Components/Login.jsx'
 import Cart from './Components/Products/Cart.jsx'
 import ContactForm from './Components/Products/ContactForm.jsx'
const router=createBrowserRouter(
	createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />}/>
    <Route path='products' element={<Catalogue />}>
    <Route index element={<Product />}/>
    <Route path='preview' element={<Preview />}/>
    <Route path=':id' element={<Preview />}/>
    </Route>
    <Route path='cart' element={<Cart />}/>
    <Route path='checkout' element={<ContactForm />}/>
    <Route path='admin' element={<Admin />}>
    <Route path='login' element={<Login />}/>
    
    <Route path='dashboard' element={<Dashboard />}>
    <Route path='' element={<Previews />}/>
    <Route path='create' element={<Create />}/>
    </Route>
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


