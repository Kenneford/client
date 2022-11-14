import React from "react";
import "./LeftPane.css";
import { useState, useEffect } from "react";

export default function LeftPane({ users }) {
  return (
    <div className="users">
      <h3>Messages</h3>
      {users.map((user, id) => {
        return (
          <div key={id} className="chatFriend">
            <div className="userImgWrap">
              <img src="/watsup-pic.jpg" alt="" width="30" height="30" />
            </div>
            <p>@{user.userName}</p>
          </div>
        );
      })}
    </div>
  );
}
