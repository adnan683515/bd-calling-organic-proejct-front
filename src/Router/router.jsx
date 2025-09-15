import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Shope from "../pages/shop/shope";
import ProductDetails from "../components/ShopePage/ProductDetails";


export const router = createBrowserRouter([
    {
        path:'/',
        Component : MainLayout,
        children : [
            {
                path:'/',
                Component : Home
            },{
                path:'/shop',
                Component : Shope
            },{
                path:'/productDetails/:id',
                Component : ProductDetails
            }
        ]
    }
])