import React from "react";
import "./LeftPane.css";
import { useState, useEffect } from "react";

export default function LeftPane({ users, token, connectedUser }) {
  const [user, setUser] = useState(localStorage.getItem("username"));
  // const [user, setUser] = useState(localStorage.getItem("username"));
  // const profile = localStorage.getItem("profileImg");
  return (
    <div className="users">
      <h3>Messages</h3>
      {users.map((user, id) => {
        return (
          <div key={id} className="chatFriend">
            <div className="userImgWrap">
              <img src={user.profileImage} alt="" width="30" height="30" />
            </div>
            <p>@{user.userName}</p>
            {user && token ? (
              <i
                className="fa-solid fa-earth-americas online-signal"
                // style={{
                //   marginRight: "10px",
                //   alignItems: "center",
                // }}
              ></i>
            ) : (
              <i className="fa-solid fa-earth-americas offline-signal"></i>
            )}
          </div>
        );
      })}
    </div>
  );
}
