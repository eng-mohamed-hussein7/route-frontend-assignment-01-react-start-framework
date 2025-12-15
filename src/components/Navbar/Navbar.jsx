import "./Navbar.css";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-blue py-4">
      <div className="container">
        <Link
          className="navbar-brand text-white text-uppercase fw-bolder fs-2"
          to="/"
        >
          Start Framework
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars text-white fs-3"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 rounded-3"
                to="/about"
              >
                about
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 mx-ls-3 rounded-3"
                to="/portfolio"
              >
                portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 rounded-3"
                to="/contact"
              >
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
