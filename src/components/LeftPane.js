import React from "react";
import "./LeftPane.css";

export default function LeftPane() {
  return (
    <div className="leftPaneWrap">
      <div className="users">
        <h3>Messages</h3>
        <div className="chatFriend">
          <img src="/watsup-pic.jpg" alt="" width="30" height="30" />
          <p>@Kenneford</p>
        </div>
        <div className="chatFriend">
          <img src="/watsup-pic.jpg" alt="" width="30" height="30" />
          <p>@Kenneford</p>
        </div>
      </div>
    </div>
  );
}
