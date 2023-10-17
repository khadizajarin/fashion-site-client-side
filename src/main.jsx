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
// import { Root } from 'postcss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>, 
    loader: ()=> fetch('data.json'),
    children: [
      {
        path:'/home',
        element:<Home></Home>,
        loader: () => fetch('data.json')
      },
      {
        path:'/addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/myCart',
        element:<MyCart></MyCart>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
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
