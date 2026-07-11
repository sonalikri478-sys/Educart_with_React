import React, { useState } from "react";
import "./Login.scss";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import {useNavigate} from "react-router-dom"

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLogin =(e) => {
    e.preventDefault();

    navigate("/home");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>Welcome Back 👋</h1>

        <p>Login to continue your learning journey.</p>

        <form onSubmit={handleLogin}>

          <div className="input-box">
            <FaEnvelope />
            <input
              type="email"
              placeholder="Email Address"
            />
          </div>

          <div className="input-box">
            <FaLock />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />

            <span
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>

          </div>

          <div className="options">

            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <a href="/">Forgot Password?</a>

          </div>

          <button className="login-btn" type="submit">
            Login
          </button>

        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <button className="google-btn">
          Continue with Google
        </button>

        <p className="register">
          Don't have an account?
          <span> Register</span>
        </p>

      </div>

    </div>
  );
}

export default Login;