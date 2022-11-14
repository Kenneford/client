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
import SentMessages from "./SentMessages";
import ReceivedMessages from "./ReceivedMessages";
import moment from "moment";

const PORT = "/chat";

export default function ChatInput({ messageSent }) {
  const [sentMessages, setSentMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [reveivedMessages, setReceivedMessages] =
    useState("I'm in here too!🤣");
  // const [user, setUser] = useState("");
  const date = `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`;
  // const date = moment().format("Do YY");
  const time = moment().format("h:mm:ss a");

  const addMessage = (sentMessages) => {
    setSentMessages((prev) => [...prev, sentMessages]);
  };
  const sendMessage = (e) => {
    e.preventDefault();
    if (messageInput === "") {
      alert("Please add a message!");
      return;
    } else {
      setSentMessages((prev) => [...prev, messageInput]);
      setMessageInput("");
    }
  };
  const sendMessage1 = (e) => {
    e.preventDefault();
    messageSent({
      sentMessages,
    });
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
      <div className="msgCont">
        <SentMessages
          sentMessages={sentMessages}
          // reveivedMessages={reveivedMessages}
          date={date}
          time={time}
        />
        <ReceivedMessages
          reveivedMessages={reveivedMessages}
          date={date}
          time={time}
        />
      </div>
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
