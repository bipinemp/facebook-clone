import React, { useState } from "react";
import Modal from "./Modal";
import axios from "../services/axiosInterceptopor";
import { useNavigate } from "react-router-dom";
import "./css/login.css";
import Register from "./Register";

const Login = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);

  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await axios
      .post("http://localhost:4000/api/auth/login", loginUser)
      .catch((error) => {
        setError(error.response.data.message);
      });

    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("fname", response.data.fname);
      localStorage.setItem("lname", response.data.lname);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("pic", response.data.pic);
      navigate("/");
    }
  };

  return (
    <div className="login">
      <Modal open={isOpen}>
        <Register setIsOpen={setIsOpen} />
      </Modal>
      <div className="login-text">
        <span className="facebook"></span>
        <p style={{ fontSize: "28px", letterSpacing: "0px" }}>
          Connect with friends and the world around you on Facebook.
        </p>
      </div>

      <div className="login-form">
        {error && <p className="error">{error}</p>}
        <div className="form">
          <form onSubmit={handleLogin}>
            <input
              onChange={handleChange}
              value={loginUser.email}
              name="email"
              type="email"
              placeholder="Email or phone number"
            />
            <input
              onChange={handleChange}
              value={loginUser.password}
              name="password"
              type="password"
              placeholder="Password"
            />
            <button>Log In</button>
            <p>Forgot password?</p>
          </form>
          <button onClick={() => setIsOpen(true)} className="account-btn">
            Create new account
          </button>
        </div>
        <p className="page">
          <b>Create a Page</b> for a celebrity, brand or business.
        </p>
      </div>
    </div>
  );
};

export default Login;
