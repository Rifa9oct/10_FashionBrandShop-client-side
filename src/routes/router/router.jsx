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
import DetailPage from "../../Pages/DetailPage/DetailPage";
import Lavis from "../../BrandPages/Levi's/Levis";


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
            path:"/mycarts",
            element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
            loader: () => fetch("https://fashion-brand-shop-server-side.vercel.app/mycarts")
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
            path:"/update/:id",
            element:<PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
            loader:({params}) => fetch(`https://fashion-brand-shop-server-side.vercel.app/products/${params.id}`)
        },
        {
            path:"/adidas",
            element:<Adidas></Adidas>,
            loader: () =>fetch("https://fashion-brand-shop-server-side.vercel.app/products")
        },
        {
            path:"/nike",
            element:<Nike></Nike>,
            loader: () =>fetch("https://fashion-brand-shop-server-side.vercel.app/products")
        },
        {
            path:"/gucci",
            element:<Gucci></Gucci>
        },
        {
            path:"/zara",
            element:<Zara></Zara>,
            loader: () =>fetch("https://fashion-brand-shop-server-side.vercel.app/products")
        },   
        {
            path:"/lavis",
            element:<Lavis></Lavis>,
            loader: () =>fetch("https://fashion-brand-shop-server-side.vercel.app/products")
        },
        {
            path:"/detail/:id",
            element:<PrivateRoute><DetailPage></DetailPage></PrivateRoute>,
            loader:({params}) => fetch(`https://fashion-brand-shop-server-side.vercel.app/products/${params.id}`)
        },   
      ]
    },
  ]);

  export default router;