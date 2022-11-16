import React from "react";
import "./Messages.css";

export default function SentMessages({ sentMessages, user, date, message }) {
  return (
    <div className="sentMsg">
      {message.map((sentMsg, id) => {
        return (
          <p key={id}>
            {sentMsg}
            {""}
            <em>{date}</em>
          </p>
        );
      })}
    </div>
  );
}
