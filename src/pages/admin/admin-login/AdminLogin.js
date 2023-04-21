import React from "react";
import "./AdminLogin.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AdminLogin({ notify, BASEURL }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  let navigate = useNavigate();

  const checkStaffLogin = (token) => {
    fetch(BASEURL + "/get-details/", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Indicates the content
        Authorization: "Token " + token,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.is_staff) {
            localStorage.setItem("INFOTECT_TOKEN", token);
            localStorage.setItem("INFOTECT_ADMIN", "true");
            notify("Logged in successfully.");
            
            navigate("/admin/my-events");
          } else {
            notify("Only admins are allowed for logging.");
          }
        },
        (error) => {
          console.log("error");
          notify("Something went wrong. Please try later");
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      username: email,
      password,
    };
    fetch(BASEURL + "/api-token-auth/", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Indicates the content
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.token) {
            checkStaffLogin(result.token);
          } else {
            notify("Invalid credentials.");
          }
        },
        (error) => {
          console.log("error");
          notify("Invalid credentials.");
        }
      );
  };

  return (
    <>
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <h2>Welcome Back!</h2>
            <h4>Admin Login</h4>
            <br></br>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
            />
            <button onClick={handleSubmit}>LOGIN</button>
            {/* <p className="message">
              Not registered? <Link to="/register">Create an account</Link>
            </p> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
