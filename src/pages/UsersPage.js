import React from "react";
import "../components/LeftPane.css";
import { useState, useEffect } from "react";
import { getVerifiedUsers } from "../apiController/api_operations";

export default function UsersPage() {
  const [users, setUsers] = useState("");

  const readUser = async () => {
    const user = await getVerifiedUsers();
    console.log(user);
    setUsers(user);
  };

  useEffect(() => {
    readUser();
  }, []);

  if (!users) {
    return <div>Loading...</div>;
  }

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
