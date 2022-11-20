import React, { useState, useEffect } from "react";
import "./ChatInput.css";
import moment from "moment";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import cSocket from "../controllers/clientSocket";

export default function ChatInput() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");
  const location = useLocation();

  const date = moment().format("MMM Do YY, h:mm a");

  useEffect(() => {
    const { name } = queryString.parse(location.search);
    setUserName(name);
    //NEW USER JOINED ALERT
    cSocket.on("joined user", (msg) => {
      console.log("user joined message: ", msg);
      // socketio.emit("join", { name }, () => {});
    });

    //NEW MESSAGE FROM ANOTHER USER
    cSocket.on("message", (message) => {
      console.log("message:", message);
      setMessages((prevMsg) => [...prevMsg, message]);
    });

    return () => {
      cSocket.off("user joined");
      cSocket.off("message");
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    cSocket.emit("message", `${userName} - ${message}`);
    setMessage("");
  };
  const handleKeyPress = (e) => {
    if (e.keyCode === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="mainBody">
      <div className="msgCont">
        {messages.map((msg, id) => (
          <div key={id}>
            {msg} {""}
            <em>{date}</em>
          </div>
        ))}
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
