import React, { useState } from "react";
import "./Login.css";
import videoSource from "../src/assets/Screen_Recording_Flames.mp4";

const uName = process.env.REACT_APP_LOGIN_USER;
const uPass = process.env.REACT_APP_LOGIN_PASS;

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (userLogin === uName && userPassword === uPass) {
      setIsLoggedIn(!isLoggedIn);
    } else {
      console.log("Incorrect Username or Password");
    }
  };

  return (
    <div
      className={isLoggedIn ? "removeLoginModal" : "loginContainer"}>
      <div className="overlay">
        <video
          width={1920}
          height={1080}
          autoPlay
          loop
          muted
          src={videoSource}></video>
      </div>
      <form className="loginContainer_modal" onSubmit={handleLogin}>
        <p>Welcome to Whimsy TMS</p>
        <div className="inputBox userName_box">
          <label name="userName">User Name:</label>
          <input
            type="text"
            name="userName"
            placeholder="username"
            required
            onChange={(e) => setUserLogin(e.target.value)}
          />
        </div>
        <div className="inputBox password_box">
          <label name="userName">Password:</label>
          <input
            type="text"
            name="userPassword"
            placeholder="password"
            required
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
