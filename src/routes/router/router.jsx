import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import Home from "../../Pages/Home/Home";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import MyCart from "../../Pages/MyCart/MyCart";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import UpdatePage from "../../Pages/UpdatePage/UpdatePage";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";


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
            element:<AddProduct></AddProduct>
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
            element:<UpdatePage></UpdatePage>
        },
      ]
    },
  ]);

  export default router;