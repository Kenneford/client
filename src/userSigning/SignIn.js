import React from "react";
import "./SignIn.css";
import SignUpButton from "../NavLinks/SignUpButton";
import FamChatButton from "../NavLinks/FamChatButton";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignIn({ signin, token, getUsers }) {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  const userCheck = () => {
    const oldUser = getUsers().map((user) => {
      return user.password;
    });
    return oldUser;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(userName, password);
    signin(userName, password);
    const userSignIn = signin(userName, password);
    if (!password || !userName) {
      toast.error("User login failed! Try", toastOptions);
      return false;
    } else {
      navigate("/chat");
    }
  };

  const handleValidation = () => {
    const userSignIn = signin(userName, password);
    if (password === "") {
      toast.error("Username and password required!", toastOptions);
      return false;
    } else if (password !== userSignIn.password) {
      toast.error("Invalid password provided!", toastOptions);
      return false;
    } else if (userName !== userSignIn.userName) {
      toast.error("Invalid username provided!", toastOptions);
      return false;
    }
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="signInWrap">
      <div className="links">
        <FamChatButton />
        <SignUpButton />
      </div>
      <form
        onSubmit={handleLogin}
        onKeyPress={handleKeypress}
        className="signInForm"
      >
        <h1>Sign-In</h1>
        <div className="signInUserName">
          <h3>Username:</h3>
          <input
            type="text"
            value={userName}
            // placeholder="Username"
            name="userName"
            onChange={(e) => setUserName(e.target.value)}
            min="3"
          />
        </div>
        <div className="signInPwd">
          <h3>Password:</h3>
          <input
            type="password"
            value={password}
            // placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="signInBtn">
          SIGN IN
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
