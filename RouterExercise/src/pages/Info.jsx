import React from "react";
import { useNavigate } from "react-router-dom";
function Info() {
  const navigate = useNavigate();

 

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="container my-3">
      <div className="bg-white border rounded shadow-lg p-5">
        <h1 className="text-primary border-bottom pb-3 mb-4">Application Information</h1>
        <p className="lead text-muted">
          Welcome to the React Router example application! This app demonstrates the use of 
          React Router for navigation, including features such as nested routes, protected routes, 
          and dynamic content loading.
        </p>

        <h2 className="text-danger mt-4 border-bottom pb-2">Features</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="fw-bold text-secondary">Routing:</span> Efficient navigation using React Router.
          </li>
          <li className="list-group-item">
            <span className="fw-bold text-secondary">Authentication:</span> Secure access to protected routes.
          </li>
          <li className="list-group-item">
            <span className="fw-bold text-secondary">Lazy Loading:</span> Optimized loading of components.
          </li>
          <li className="list-group-item">
            <span className="fw-bold text-secondary">Nested Routes:</span> Dynamic rendering of nested routes.
          </li>
          <li className="list-group-item">
            <span className="fw-bold text-secondary">State Management:</span> Managing state with query parameters.
          </li>
        </ul>

        <h2 className="text-success mt-5 border-bottom pb-2">Get Started</h2>
        <p className="text-dark">
          Use the navigation bar to explore the app. Each section highlights specific React Router
          features with examples and explanations.
        </p>
        <div className="alert alert-info text-center mt-4">
          <strong>Tip:</strong> Check out the "Exercise" section for hands-on examples and topics!
        </div>

        <div className="d-flex justify-content-end mt-4">
          <button 
            onClick={handleBack} 
            className="btn btn-outline-secondary btn-lg px-4"
          >
            &larr; Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Info;
