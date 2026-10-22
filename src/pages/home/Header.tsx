import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <h3>React Router</h3>

          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/shoplist">Shop</Link>
              <Link to="/hotelsearch">Hotels</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
