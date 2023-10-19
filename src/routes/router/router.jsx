import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import Home from "../../Pages/Home/Home";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import MyCart from "../../Pages/MyCart/MyCart";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import UpdatePage from "../../Pages/UpdatePage/UpdatePage";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Adidas from "../../BrandPages/Adidas/Adidas";
import Nike from "../../BrandPages/Nike.jsx/Nike";
import Gucci from "../../BrandPages/Gucci/Gucci";
import Zara from "../../BrandPages/Zara/Zara";


const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<ErrorPage></ErrorPage>,
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/addProduct",
            element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
            path:"/mycart",
            element:<MyCart></MyCart>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/update",
            element:<PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>
        },
        {
            path:"/adidas",
            element:<Adidas></Adidas>
        },
        {
            path:"/nike",
            element:<Nike></Nike>
        },
        {
            path:"/gucci",
            element:<Gucci></Gucci>
        },
        {
            path:"/zara",
            element:<Zara></Zara>
        },   
      ]
    },
  ]);

  export default router;