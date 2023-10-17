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
        element: <AddProduct></AddProduct>
      },
      {
        path: '/myCart',
        element:<MyCart></MyCart>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
