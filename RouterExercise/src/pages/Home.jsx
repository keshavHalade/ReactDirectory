import React from "react";
import { bgScreen } from "../assets/img";
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();
  const styles = {
    backgroundImage: `url(${bgScreen})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  return (
    <div style={styles}>
      <div className="bg-dark bg-opacity-50 p-5 rounded">
        <h1 className="mb-4">Welcome to Our React Router Tour</h1>
        <p className="lead">
         This project is for practice the react router library which using the all scenario which are available in this library
        </p>
        <button className="btn btn-primary btn-lg mt-3"
        onClick={() => navigate("/app")}>Get Started</button>
      </div>
    </div>
  );
}

export default Home;
