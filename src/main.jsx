import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import ErrorPagee from './components/ErrorPage/ErrorPagee'
import Shop from './components/Shop/Shop'

 const router = createBrowserRouter([
   {
     path: "/",
     element: <App></App>,
     errorElement: <ErrorPagee></ErrorPagee>,
     children: [
       {
         path: "/",
         element: <Home></Home>,
       },
       {
         path: "/about",
         element: <About></About>,
       },
       {
         path: "/shop",
         element: <Shop></Shop>,
         loader: () => fetch('product.json')
       },
     ],
   },
 ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
