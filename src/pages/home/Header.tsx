// Link
// Navlink
// isActive
// end
import { Link, NavLink } from "react-router";

type NavlinkProps = {
  isActive: boolean;
};

const Header = () => {
  const linkStyle = ({ isActive }: NavlinkProps) => {
    // console.log(isActive);
    return isActive ? "custom-active" : "";
  };

  return (
    <>
      <div className="header">
        <div className="container">
          <h3>React Router</h3>

          <ul>
            <li>
              <NavLink to="/" end className={linkStyle}>
                Home
              </NavLink>
              <NavLink to="/shoplist" className={linkStyle}>
                Shop
              </NavLink>
              <NavLink to="/hotels" className={linkStyle}>
                Hotels
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/auth" end className={linkStyle}>
                Login
              </NavLink>
              <NavLink to="/auth/signup" className={linkStyle}>
                Signup
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
