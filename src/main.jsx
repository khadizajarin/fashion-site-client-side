import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componants/Home.jsx';
import AddProduct from './componants/AddProduct.jsx';
import MyCart from './componants/MyCart.jsx';
import Root from './componants/Root';
import Register from './componants/Register';
import Login from './componants/Login';
import AuthProvider from './componants/AuthProvide/AuthProvider';
import PrivateRoute from './componants/PrivateRoute';
import ErrorRoute from './componants/ErrorRoute';
import Products from './componants/ProductsDetails/Products';
import Brands from './componants/Brands';
import UpdateProduct from './componants/UpdateProduct';
import Details from './componants/Details';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>, 
    errorElement:<ErrorRoute></ErrorRoute>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/myCart',
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/brands',
        element: <Brands></Brands>
      },
      {
        path:'/products/:name',
        element: <Products></Products>,
      },
      {
        path: '/updateProduct/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/addProduct/${params.id}`)
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/addProduct/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
