import React from "react";
import "./Messages.css";
import ScrollToBottom from "react-scroll-to-bottom";

export default function Messages({ messages, name }) {
  return (
    <ScrollToBottom className="sentMsg">
      {messages.map((message, id) => {
        return (
          <div key={id}>
            <Messages message={message} name={name} />
          </div>
          // <p key={id}>
          //   {message}
          //   {""}
          //   {/* <em>{dateSent}</em> */}
          // </p>
        );
      })}
    </ScrollToBottom>
  );
}
