import React from "react";
import "./Login.css";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div
      className={isLoggedIn ? "removeLoginModal" : "loginContainer"}>
      <div className="loginContainer_modal">
        <p>Welcome to Whimsy TMS!</p>
        <p>Click Login Button to Enter!</p>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
