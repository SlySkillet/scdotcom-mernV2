import "./nav-styles.css";
import { Link } from "react-router-dom";

const NavBar = function () {
  return (
    <div className="nav-container">
      <div className="brand">S.C.</div>
      <div className="links">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/projects">
          Projects
        </Link>
        <Link className="nav-link" to="/resume">
          Resume
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
        <div className="nav-spacer">|</div>
        <Link className="nav-link" to="/blog">
          Blog
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
