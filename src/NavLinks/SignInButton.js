import React from "react";
import { Link } from "react-router-dom";
import "./LinkButtons.css";

export default function SignInButton() {
  return (
    <div className="signInLinkBtn">
      Already have an account? <Link to="/">Sign-In</Link>
    </div>
  );
}
