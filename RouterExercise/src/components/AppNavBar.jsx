import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function AppNavBar() {

  const navigate = useNavigate();



  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container text-white">
        <NavLink className="navbar-brand text-primary" to="/app">
          Router Example
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="exercise">
                Exercise
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="info">
                Information
              </NavLink>
            </li>

            <li className="nav-item">
              <button className="nav-link rounded bg-success"
              onClick={handleLogOut}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AppNavBar;
