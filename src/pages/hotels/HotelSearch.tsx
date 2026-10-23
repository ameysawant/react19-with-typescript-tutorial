import React from "react";
import { Link } from "react-router";

const HotelSearch = () => {
  return (
    <>
      <div className="hotelsearch">
        <div>HotelSearch page</div>
        <Link to="/hotels/hotellist">hotel list</Link>
      </div>
    </>
  );
};

export default HotelSearch;
