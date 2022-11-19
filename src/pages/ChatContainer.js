import React from "react";
import { useState, useEffect } from "react";
import socketClient from "socket.io-client";
import { getVerifiedUsers } from "../apiController/api_operations";
import SignIn from "../userSigning/SignIn";
import ChatPage from "./ChatPage";
import ReceivedMessages from "./Message";
import SentMessages from "./Messages";
import queryString from "query-string";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

export default function ChatContainer({ token, signin }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState();
  const [isConnected, setIsConnected] = useState(false);

  const readUser = async () => {
    const user = await getVerifiedUsers();
    console.log(user);
    setUser(user);
  };

  useEffect(() => {
    readUser();
  }, []);

  const connectedUser = () => {
    setIsConnected(true);
  };

  return (
    <div>
      {/* <ChatPage userName={userName} token={token} /> */}
      {isConnected ? (
        <ChatPage userName={userName} token={token} />
      ) : (
        <SignIn signin={signin} connectedUser={connectedUser} />
      )}
    </div>
  );
}
