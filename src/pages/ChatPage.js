import React, { useState, useEffect } from "react";
import "./ChatPage.css";
import { getVerifiedUsers } from "../apiController/api_operations";
import LeftPane from "../components/LeftPane";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import RightPane from "../components/RightPane";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import queryString from "query-string";
import clientSocket from "socket.io-client";

let socketio;

export default function ChatPage({ messageSent, chatsList, userName, token }) {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const ENDPOINT = "ws://localhost:8083";

  useEffect(() => {
    const { name } = queryString.parse(location.search);
    socketio = clientSocket(ENDPOINT);

    setName(name);

    console.log(socketio);
    socketio.emit("joined", { name }, () => {});
    return () => {
      socketio.emit("closing connection");
      socketio.off();

      console.log(location.search);
      console.log(name);
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socketio.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  //Funstion To Send Message
  const sendMessage = (e) => {
    e.preventDefault();
    if (message === "") {
      alert("Please add a message!");
      return;
    }
    socketio.emit("sendMessage", message);
    setMessage("");
  };
  // console.log(message, messages);

  const readUser = async () => {
    const user = await getVerifiedUsers();
    console.log(user);
    setUsers(user);
  };

  useEffect(() => {
    readUser();
  }, []);

  if (!users) {
    navigate("/login");
  }

  // const sendMessage = (e) => {
  //   e.preventDefault();
  //   if (messageInput === "") {
  //     alert("Please add a message!");
  //     return;
  //   } else {
  //     setSentMessages((prev) => [...prev, messageInput]);
  //     setMessageInput("");
  //   }
  // };

  const connectedUser = () => {
    setIsConnected(true);
  };

  return (
    <div className="chatBody">
      <Header userName={userName} token={token} connectedUser={connectedUser} />
      <div className="sideBars">
        <LeftPane users={users} token={token} connectedUser={connectedUser} />
        <div className="chatCont">
          {/* <Messages messages={messages} name={name} /> */}
          <ChatInput
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
        <RightPane users={users} />
      </div>
    </div>
  );
}
