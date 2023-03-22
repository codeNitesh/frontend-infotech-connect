import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <h2>Register</h2>
            <br></br>
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="email address" />
            <button>create</button>
            <p className="message">
              Already registered? <Link to="/login">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
