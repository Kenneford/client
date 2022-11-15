import React from "react";
import { Link } from "react-router-dom";

export default function FamChatButton() {
  return (
    <div className="famLink">
      <Link to="/login">
        fam<span className="chatWhite">Chat</span>
      </Link>
    </div>
  );
}
