import React, { useState, useEffect } from "react";
import "./ChatPage.css";
import { getVerifiedUsers } from "../apiController/api_operations";
import LeftPane from "../components/LeftPane";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import RightPane from "../components/RightPane";
import ChatInput from "./ChatInput";
import Messages from "./SentMessages";

export default function ChatPage() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const readUser = async () => {
    const user = await getVerifiedUsers();
    console.log(user);
    setUsers(user);
  };

  useEffect(() => {
    readUser();
  }, []);
  if (!users) {
    return <div>Loading...</div>;
    // navigate("/login");
  }

  return (
    <div className="chatBody">
      <Header users={users} />
      <div className="sideBars">
        <LeftPane users={users} />
        <div className="chatCont">
          <ChatInput messageSent={(message) => console.log(message.message)} />
        </div>
        <RightPane users={users} />
      </div>
    </div>
  );
}
