import React from "react";
import "./SignIn.css";
import SignUpButton from "../NavLinks/SignUpButton";
import FamChatButton from "../NavLinks/FamChatButton";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getVerifiedUsers } from "../apiController/api_operations";
import "react-toastify/dist/ReactToastify.css";

export default function SignIn({ signin, token, getUsers }) {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImg")
  );
  const [user, setUser] = useState("");
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

  //Still need to work on user login
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(userName, password);
    // const userNameCheck = localStorage.getItem("username");
    // const passwordCheck = localStorage.getItem("password");
    signin(userName, password);

    if (!password && !userName) {
      toast.error(
        "Authentication failed! Provide a username and a password!😒",
        toastOptions
      );
      // setError("Password and username can't be empty!");
      return;
      // } else if (password !== passwordCheck) {
      //   toast.error(
      //     "Authentication failed! Invalid password provided!😒",
      //     toastOptions
      //   );
      //   // setError("Password and username can't be empty!");
      //   return;
      // } else if (userName !== userNameCheck) {
      //   toast.error(
      //     "Authentication failed! Invalid username provided!😒",
      //     toastOptions
      //   );
      //   // setError("Password and username can't be empty!");
      //   return;
    } else {
      localStorage.setItem("username", userName);
      const userProfile = localStorage.setItem("profileImg", profileImage);
      setUser(userName);
      setProfileImage(userProfile);
      // navigate(`/?name=${userName}`);
    }
    navigate(`/?name=${userName}`);
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
    if (e.keyCode === "13") {
      handleLogin();
    }
  };

  return (
    <div className="signInWrap">
      <div className="links">
        <FamChatButton user={user} />
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
      {/* <span>{error}</span> */}
      <ToastContainer />
    </div>
  );
}
