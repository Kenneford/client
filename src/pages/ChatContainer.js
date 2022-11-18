import React from "react";
import { useState, useEffect } from "react";
import socketClient from "socket.io-client";
import { getVerifiedUsers } from "../apiController/api_operations";
import SignIn from "../userSigning/SignIn";
import ChatPage from "./ChatPage";
import ReceivedMessages from "./Message";
import SentMessages from "./Messages";
import queryString from "query-string";

export default function ChatContainer({ userName }) {
  //   let socketio = socketClient("ws://localhost:8083");

  //   const [chats, setChats] = useState([]);
  const [user, setUser] = useState();

  const readUser = async () => {
    const user = await getVerifiedUsers();
    console.log(user);
    setUser(user);
  };

  useEffect(() => {
    readUser();
  }, []);

  //   useEffect(() => {
  //     socketio.on("chat", (senderChats) => {
  //       setChats(senderChats);
  //     });
  //   });

  //   function sendChatToSocket(chat) {
  //     socketio.emit("chat", chat);
  //   }

  //   function messageSent(chat) {
  //     const newChat = { ...chat, user };
  //     setChats([...chats, newChat]);
  //     sendChatToSocket([...chats, newChat]);
  //   }

  //   function ChatsList() {
  //     return chats.map((chat, id) => {
  //       if (chat.user === user) {
  //         return <ReceivedMessages key={id} message={chat.message} />;
  //       }
  //       return <SentMessages key={id} message={chat.message} />;
  //     });
  //   }

  return (
    <div>
      {user && (
        <ChatPage
          //   ChatsList={ChatsList}
          //   messageSent={messageSent}
          userName={userName}
        />
      )}
    </div>
  );
}
