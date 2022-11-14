import React from "react";
import "./Messages.css";

export default function SentMessages({ sentMessages, user, date }) {
  return (
    <div className="sentMsg">
      {sentMessages.map((sentMsg, id) => {
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
