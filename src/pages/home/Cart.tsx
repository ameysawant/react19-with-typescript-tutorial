import React from "react";
import { useLocation } from "react-router";

const Cart = () => {
  const location = useLocation();
  console.log(location);
  return (
    <p>
      {location.state.mySingleProduct
        ? location.state.mySingleProduct.title
        : "not available"}
    </p>
  );
};

export default Cart;
