import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import Home from "@/pages/home/Index";
import HotelDetail from "@/pages/hotels/HotelDetail";
import HotelList from "@/pages/hotels/HotelList";
import HotelSearch from "@/pages/hotels/HotelSearch";
import ShopDetail from "@/pages/shop/ShopDetail";
import ShopList from "@/pages/shop/ShopList";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  // {
  //   path: "/shoplist",
  //   Component: ShopList,
  // },
  // {
  //   path: "/shopdetail",
  //   Component: ShopDetail,
  // },
  // {
  //   path: "/hotelsearch",
  //   Component: HotelSearch,
  // },
  // {
  //   path: "/hotellist",
  //   Component: HotelList,
  // },
  // {
  //   path: "/hoteldetail",
  //   Component: HotelDetail,
  // },
  // {
  //   path: "/login",
  //   Component: Login,
  // },
  // {
  //   path: "/signup",
  //   Component: Signup,
  // },
]);
