import React from "react";
import { Link } from "react-router-dom";
import "./FamChatButtonHeader.css";

export default function FamChatButtonHeader() {
  return (
    <div className="famLinkHeader">
      <Link to="/" className="lynk">
        fam<span className="chatWhite">Chat</span>
      </Link>
    </div>
  );
}
