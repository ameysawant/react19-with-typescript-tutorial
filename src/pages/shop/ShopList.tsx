import React from "react";
import { Link } from "react-router";

const ShopList = () => {
  return (
    <>
      <div className="shoplist">
        <div>ShopList page</div>
        <Link to="/shopdetail">shop detail</Link>
      </div>
    </>
  );
};

export default ShopList;
