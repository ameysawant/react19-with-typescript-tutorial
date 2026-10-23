import React from "react";
import { Outlet } from "react-router";
import AuthHeader from "./AuthHeader";
import AuthFooter from "./AuthFooter";

const AuthLayout = () => {
  return (
    <>
      <AuthHeader />
      <Outlet />
      <AuthFooter />
    </>
  );
};

export default AuthLayout;
