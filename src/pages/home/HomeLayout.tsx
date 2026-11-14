import Footer from "@/pages/home/Footer";
import Header from "@/pages/home/Header";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <>
      <div style={{ display: "none" }}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomeLayout;
