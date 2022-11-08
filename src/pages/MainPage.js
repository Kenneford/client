import React from "react";
import "./MainPage.css";
import Header from "../components/Header";
import LeftPane from "../components/LeftPane";
import RightPane from "../components/RightPane";
import { Routes, Route } from "react-router-dom";
import ChatPage from "./ChatPage";
import Settings from "./Settings";
import { Link, Navigate } from "react-router-dom";

export default function MainPage({ token, getUsers }) {
  return (
    <div className="mainBody">
      <Header />
      <div className="componentsFlex">
        <LeftPane getUsers={getUsers} />
        {/* <ChatPage /> */}
        <Routes>
          <Route path="/" element={<ChatPage />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <RightPane />
      </div>
    </div>
  );
}
