import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <header>
        <h2>Header LOGO</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/shoplist">Shop</Link>
            <a href="">Hotels</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
