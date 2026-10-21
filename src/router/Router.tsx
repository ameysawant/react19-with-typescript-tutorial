import AuthLayout from "@/component/auth/AuthLayout";
import Login from "@/component/auth/Login";
import Register from "@/component/auth/Register";
import HomeLayout from "@/component/home/HomeLayout";
import Home from "@/component/home/Index";
import Shopdetails from "@/component/home/Shopdetails";
import ShopList from "@/component/home/ShopList";
import PageNotFound from "@/component/PageNotFound";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      { index: true, Component: Home },
      { path: "shoplist", Component: ShopList },
      { path: "shopdetails", Component: Shopdetails },
    ],
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      { index: true, Component: Login },
      { path: "register", Component: Register },
    ],
  },
  {
    path: "*",
    Component: PageNotFound,
  },
]);

export default router;
