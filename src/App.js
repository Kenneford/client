import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./userSigning/SignUp";
import SignIn from "./userSigning/SignIn";
import MainPage from "./pages/MainPage";
import {
  signUpUser,
  validateUser,
  getVerifiedUsers,
} from "./apiController/api_operations";

function App() {
  const [data, setData] = useState({
    users: [],
    token: null,
    userName: null,
  });

  const register = async (
    firstName,
    lastName,
    userName,
    email,
    password,
    confirmPassword
  ) => {
    const token = await signUpUser({
      firstName,
      lastName,
      userName,
      email,
      password,
      confirmPassword,
    });
    setData((prev) => ({ ...prev, token: token }));
  };

  const getUsers = async (token) => {
    if (!token) {
      console.log("token not ready yet");
      return [];
    }
    console.log("token ready, will get users");
    const users = await getVerifiedUsers(token);
    if (!users) {
      return;
    }
    setData((prev) => {
      const newState = { ...prev, users };
      console.log("newState", newState);
      return newState;
    });
  };

  // useEffect(() => {
  //   console.log("Reading Blogs");
  // }, [data.token]);

  const signin = async (userName, password) => {
    const token = await validateUser(userName, password);
    setData((prev) => ({ ...prev, token: token }));
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={<SignIn signin={signin} token={data.token} />}
      />
      <Route
        path="/signup"
        element={<SignUp register={register} token={data.token} />}
      />
      <Route path="/chat" element={<MainPage />} />
    </Routes>
  );
}

export default App;
