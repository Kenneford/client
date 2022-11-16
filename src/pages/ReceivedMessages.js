import React from "react";

export default function ReceivedMessages({
  user,
  reveivedMessages,
  date,
  message,
}) {
  return (
    <div className="receivedMsg">
      <div className="msgSender">Kenny</div>
      <p>
        {message} {""}
        <em>{date}</em>
      </p>
    </div>
  );
}
