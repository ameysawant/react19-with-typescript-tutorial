import React from "react";
import { Link } from "react-router";

const HotelList = () => {
  return (
    <>
      <div className="hotellist">
        <div>HotelList page</div>
        <Link to="/hotels/hoteldetail">hotel detail</Link>
      </div>
    </>
  );
};

export default HotelList;
