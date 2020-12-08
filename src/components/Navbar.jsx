import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
    <div className="navbar-brand">
      <h2>Birthday App</h2>
    </div>

    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/" exact>
          <h4><u>Home</u></h4>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/employees">
          <h4><u>Employees</u></h4>
        </NavLink>
      </li>
    </ul>
  </nav>
);
