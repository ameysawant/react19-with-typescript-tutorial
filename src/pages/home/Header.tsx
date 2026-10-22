import React from "react";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <h3>React Router</h3>

          <ul>
            <li>
              <a href="/">Home</a>
              <a href="/shoplist">Shop</a>
              <a href="/hotelsearch">Hotels</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/login">Login</a>
              <a href="/signup">Signup</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
