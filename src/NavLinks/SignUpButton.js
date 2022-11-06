import React from "react";
import { Link } from "react-router-dom";
import "./LinkButtons.css";

export default function SignUpButton() {
  return (
    <div className="signUpLinkBtn">
      Don't have an account? <Link to="/signup">Sign-Up</Link>
    </div>
  );
}
