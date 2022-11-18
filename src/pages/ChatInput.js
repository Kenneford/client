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
import SentMessages from "./Messages";
import ReceivedMessages from "./Message";
import socketClient from "socket.io-client";
import { getVerifiedUsers } from "../apiController/api_operations";
import moment from "moment";

const PORT = "/chat";

export default function ChatInput({ message, setMessage, sendMessage }) {
  // const [sentMessages, setSentMessages] = useState([]);
  // const [messageInput, setMessageInput] = useState("");
  // const [reveivedMessages, setReceivedMessages] = useState(
  //   "Hi, I'm also here...🤣"
  // );
  // const [user, setUser] = useState("");
  // const dateSent = `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`;
  const dateSent = moment().format("Do MMM, YY - h:mm:ss a");
  const dateReceived = moment().format("Do MMM, YY - h:mm:ss a");
  // const date = moment().format("Do YY");
  const time = moment().format("h:mm:ss a");

  const handleKeyPress = (e) => {
    if (e.keyCode === "Enter") {
      sendMessage();
      setMessage("");
    }
  };

  return (
    <div className="mainBody">
      <div className="msgCont">
        {/* <ChatsList /> */}
        {/* <SentMessages
          sentMessages={sentMessages}
          // reveivedMessages={reveivedMessages}
          dateSent={dateSent}
          time={time}
        />
        <ReceivedMessages
          reveivedMessages={reveivedMessages}
          dateReceived={dateReceived}
          time={time}
        /> */}
      </div>
      <form
        className="chatInput"
        onSubmit={sendMessage}
        onKeyPress={handleKeyPress}
      >
        <input
          type="text"
          placeholder="Enter your message here..."
          autoComplete="off"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send ➤</button>
      </form>
    </div>
  );
}
