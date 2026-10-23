import React from "react";
import { Outlet } from "react-router";

const HotelLayout = () => {
  return (
    <>
      <h2>hotel header</h2>
      <Outlet />
      <h2>hotel footer</h2>
    </>
  );
};

export default HotelLayout;
