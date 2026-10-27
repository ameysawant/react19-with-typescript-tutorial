import AuthLayout from "@/pages/auth/AuthLayout";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import Cart from "@/pages/home/Cart";
import HomeLayout from "@/pages/home/HomeLayout";
import Home from "@/pages/home/Index";
import HotelDetail from "@/pages/hotels/HotelDetail";
import HotelLayout from "@/pages/hotels/HotelLayout";
import HotelList from "@/pages/hotels/HotelList";
import HotelSearch from "@/pages/hotels/HotelSearch";
import ShopDetail from "@/pages/shop/ShopDetail";
import ShopList from "@/pages/shop/ShopList";
import { createBrowserRouter } from "react-router";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "shoplist",
        Component: ShopList,
      },
      {
        Component: ProtectedRoute,
        children: [
          {
            path: "shopdetail/:id/:name",
            Component: ShopDetail,
          },
          {
            path: "cart",
            Component: Cart,
          },
        ],
      },
      {
        path: "auth",
        Component: AuthLayout,
        children: [
          {
            index: true,
            Component: Login,
          },
          {
            path: "signup",
            Component: Signup,
          },
        ],
      },
    ],
  },

  {
    path: "/hotels",
    Component: HotelLayout,
    children: [
      {
        index: true,
        Component: HotelSearch,
      },
      {
        Component: ProtectedRoute,
        children: [
          {
            path: "hotellist",
            Component: HotelList,
          },
          {
            path: "hoteldetail",
            Component: HotelDetail,
          },
        ],
      },
    ],
  },
]);

export default router;
