import Footer from "@/pages/home/Footer";
import Header from "@/pages/home/Header";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default HomeLayout;
