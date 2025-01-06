import React from "react";
import "./Login.css";
import videoSource from "../src/assets/Screen_Recording_20250106_032416_YouTube 2.mp4";

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
        <p>Welcome to Whimsy TMS!</p>
        <p>Click Login Button to Enter!</p>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
