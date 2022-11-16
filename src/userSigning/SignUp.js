import React, { useState, useEffect } from "react";
import "./SignUp.css";
import LockIcon from "@mui/icons-material/Lock";
import FamChatButton from "../NavLinks/FamChatButton";
import SignInButton from "../NavLinks/SignInButton";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp({ signup, user, getUsers }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
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
      return user.userName;
    });
    return oldUser;
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      userName,
      email,
      password,
      confirmPassword,
    });
    signup(firstName, lastName, userName, email, password, confirmPassword);
    if (!firstName || !lastName) {
      const error = "First name or last name should not be empty!";
      console.log({ Error: error });
      return error;
    } else if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password must be the same!",
        toastOptions
      );
      return false;
    } else if (userName.length < 3) {
      toast.error("Username should be more than 3 characters!", toastOptions);
      return false;
    }
    // else if (userName) {
    //   toast.error("Username already in use by another user!", toastOptions);
    //   return false;
    // }
    else if (password.length < 8) {
      toast.error(
        "Password should be equal to or greater than 8 characters!",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Please check and enter email address!", toastOptions);
      return false;
    } else {
      // localStorage.setItem("username", userName);
      // localStorage.setItem("password", password);
      navigate("/login");
    }
  };

  // const handleValidation = () => {
  //   if (password !== confirmPassword) {
  //     toast.error(
  //       "Password and confirm password must be the same!",
  //       toastOptions
  //     );
  //     return false;
  //   } else if (userName.length < 3) {
  //     toast.error("Username should be more than 3 characters!", toastOptions);
  //     return false;
  //   } else if (password.length < 8) {
  //     toast.error(
  //       "Password should be equal to or greater than 8 characters!",
  //       toastOptions
  //     );
  //     return false;
  //   } else if (email === "") {
  //     toast.error("Please check and enter email address!", toastOptions);
  //     return false;
  //   }
  // };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === "Enter") {
      handleSignUp();
    }
  };

  return (
    <div className="signUpWrap">
      <div className="links">
        <FamChatButton />
        <SignInButton />
      </div>
      <form
        onSubmit={handleSignUp}
        onKeyPress={handleKeypress}
        className="signUpForm"
      >
        <div className="lock">
          <LockIcon />
        </div>
        <h1>Sign-Up</h1>
        <div className="name">
          <div className="firstName">
            <h3>First Name:</h3>
            <input
              type="text"
              value={firstName}
              // placeholder="First Name"
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="lastName">
            <h3>Last Name:</h3>
            <input
              type="text"
              value={lastName}
              // placeholder="Last Name"
              name="lastName"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="userName-email">
          <div className="userName">
            <h3>Username:</h3>
            <input
              type="text"
              value={userName}
              // placeholder="Username"
              name="userName"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="email">
            <h3>Email:</h3>
            <input
              type="email"
              value={email}
              // placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="password">
          <div className="pwd">
            <h3>Password:</h3>
            <input
              type="password"
              value={password}
              // placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="confirm-pwd">
            <h3>Confirm Password:</h3>
            <input
              type="password"
              value={confirmPassword}
              // placeholder="Confirm Password"
              name="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="signUpBtn">
          Create New Account
        </button>
        <Footer />
        <ToastContainer />
      </form>
    </div>
  );
}
