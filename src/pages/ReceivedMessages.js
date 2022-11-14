import React from "react";

export default function ReceivedMessages({ user, reveivedMessages, date }) {
  return (
    <div className="receivedMsg">
      <div className="msgSender">Kenny</div>
      <p>
        {reveivedMessages} {""}
        <em>{date}</em>
      </p>
    </div>
  );
}
