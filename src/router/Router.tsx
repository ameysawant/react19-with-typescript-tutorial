import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import Home from "@/pages/home/Index";
import HotelDetail from "@/pages/hotels/HotelDetail";
import HotelList from "@/pages/hotels/HotelList";
import HotelSearch from "@/pages/hotels/HotelSearch";
import ShopDetail from "@/pages/shop/ShopDetail";
import ShopList from "@/pages/shop/ShopList";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
  {
    path: "/shoplist",
    Component: ShopList,
  },
  {
    path: "/shopdetail",
    Component: ShopDetail,
  },
  {
    path: "/hotellist",
    Component: HotelList,
  },
  {
    path: "/hoteldetail",
    Component: HotelDetail,
  },
  {
    path: "/hotelsearch",
    Component: HotelSearch,
  },
]);

export default router;
