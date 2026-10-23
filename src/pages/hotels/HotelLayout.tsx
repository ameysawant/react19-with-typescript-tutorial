import React from "react";
import { Outlet } from "react-router";
import HotelHeader from "./HotelHeader";
import HotelFooter from "./HotelFooter";

const HotelLayout = () => {
  return (
    <>
      <HotelHeader />
      <Outlet />
      <HotelFooter />
    </>
  );
};

export default HotelLayout;
