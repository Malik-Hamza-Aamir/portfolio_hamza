import { HashLink as Link } from "react-router-hash-link";
import "./navbar.scss";
import { ReactComponent as Logo } from "../../Assets/logo.svg";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="nav-container">
          <div className="logo-container">
            <Logo className="logo" />
            <text className="svg-text">H</text>
          </div>

          <div className="nav-links-container">
            <ol className="nav-links">
              <li className="nav-link">
                <Link className="link-main" to="#about" smooth>
                  About
                </Link>
              </li>

              <li className="nav-link">
                <Link className="link-main" to="/#work" smooth>
                  Work
                </Link>
              </li>

              <li className="nav-link">
                <Link className="link-main" to="/#contact" smooth>
                  Contact
                </Link>
              </li>
            </ol>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
