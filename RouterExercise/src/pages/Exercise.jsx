import React from "react";
import { Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";
import { data } from "../assets/data/data.js";  // Corrected the import path

function Exercise() {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-4">
          <div className="bg-light p-4 rounded shadow-sm h-100">
            <h4 className="text-danger mb-4">Exercise Topics</h4>
            <ul className="list-group list-group-flush border rounded">
              {data.map((item) => (
                <li key={item.id} className="list-group-item">
                  <NavLink 
                    to={`${item.path
                      .toLowerCase()}`}
                      className="text-decoration-none">
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-lg-8 mt-4 mt-lg-0">
          <div className="bg-white p-4 rounded shadow-sm h-100">
            <h5 className="text-primary">Content</h5>
            <Outlet />
          </div>
        </div>
        <div className="d-flex justify-content-end p-3 bg-secondary">
      <button className="btn btn-light"
      onClick={()=> navigate(-1)}>&larr; Back</button>
      </div>
      </div>
    </div>
  );
}

export default Exercise;
