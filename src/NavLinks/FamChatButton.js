import React from "react";
import { Link } from "react-router-dom";
import "./LinkButtons.css";

export default function HomeButton() {
  return (
    <div className="famLink">
      <Link to="/">
        fam<span>Chat</span>
      </Link>
    </div>
  );
}
