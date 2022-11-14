import React, { useState, useEffect } from "react";
import "./ChatInput.css";
import Header from "../components/Header";
import LeftPane from "../components/LeftPane";
import RightPane from "../components/RightPane";
import { Routes, Route } from "react-router-dom";
import ChatPage from "./ChatPage";
import Settings from "./Settings";
// import Picker from "emoji-picker-react";
// import { IoMdSend } from "react-icons/io";
// import { BsEmojiSmileFill } from "react-icons/bs";
import { Link, Navigate } from "react-router-dom";
import Messages from "./Messages";

// const PORT = 4000;
// const URL = "ws://localhost:" + PORT;

export default function ChatInput({ token, getUsers }) {
  const [sentMessages, setSentMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [reveivedMessages, setReceivedMessages] = useState("");

  // let wsClient;
  // wsClient = new WebSocket(URL);
  // wsClient.onopen = () => {
  //   console.log("Connection to the WebSocket server established!");
  //   const data = {
  //     type: "NEW_USER",
  //     // payload: { username },
  //   };
  //   wsClient.send(JSON.stringify(data));
  // };

  const sendMessage = (e) => {
    e.preventDefault();
    setSentMessages(messageInput);
    setMessageInput("");
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === "Enter") {
      sendMessage();
      setMessageInput("");
    }
  };

  return (
    <div className="mainBody">
      <Messages sentMessages={sentMessages} />
      <form
        className="chatInput"
        onSubmit={sendMessage}
        onKeyPress={handleKeyPress}
      >
        <input
          type="text"
          placeholder="Enter your message here..."
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <button type="submit">Send ➤</button>
      </form>
    </div>
  );
}
