import React from "react";
import "./NotPermitted.css";

import { NavLink, Link, useNavigate, Navigate } from "react-router-dom";

export default function NotPermitted() {
  return (
    <div className="permitWrap">
      <h1>Unauthorized⛔</h1>
      <p>Please contact the Admin!</p>
      <Link to="/login">
        <button>Goto login page</button>
      </Link>
    </div>
  );
}
