import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <>
      <h2>auth header</h2>
      <Outlet />
      <h2>auth header</h2>
    </>
  );
};

export default AuthLayout;
