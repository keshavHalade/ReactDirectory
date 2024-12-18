import React, { useState } from "react";
import "./Login.css";

function Login({handleUserLogin}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault(); // prevent form from submitting normally
    handleUserLogin(email,password)
    setEmail("");
    setPassword("");
  };
  return (
    <div className="login-page">
      <div className="welcome-img"></div>
      <form className="login-form" onSubmit={(e) => submitHandler(e)}>
        <h1 className="login-header">Login Page</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="login-input"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="login-input"
          required
        />
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
