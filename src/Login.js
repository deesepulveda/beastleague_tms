import React from "react";
import "./Login.css";
import videoSource from "../src/assets/Screen_Recording_Flames.mp4";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
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
      <div className="loginContainer_modal">
        <p>Welcome to Whimsy TMS</p>
        <div className="inputBox userName_box">
          <label name="userName">User Name:</label>
          <input type="text" name="userName" placeholder="username" />
        </div>
        <div className="inputBox password_box">
          <label name="userName">Password:</label>
          <input type="text" name="userName" placeholder="password" />
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
