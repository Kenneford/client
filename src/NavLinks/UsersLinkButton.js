import React from "react";
import { Link } from "react-router-dom";

export default function UsersLinkButton() {
  return (
    <Link to="/all-users">
      <button>All Users</button>
    </Link>
  );
}
