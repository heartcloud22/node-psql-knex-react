import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand mb-0 h1">Navbar</span>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/todo/add">
            Add Todo <span className="sr-only">(current)</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
