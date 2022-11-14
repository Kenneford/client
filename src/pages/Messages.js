import React from "react";
import "./Messages.css";

export default function Messages({ sentMessages }) {
  return (
    <div className="msgCont">
      <div className="messages">
        <div className="message">
          <div className="receivedMsg">
            <div className="msgSender">Kenny</div>
            <p>
              Received Messages! Sent Mesages! We and our partners store and/or
              access information on a device. {""}
              <em>Nov, 11 - 11:55am</em>
            </p>
          </div>
          <div className="sentMsg">
            <p>
              Sent Messages! We and our partners store and/or access information
              on a device, such as cookies and process personal data, such as
              unique identifiers {""} <em>Nov, 11 - 11:55am</em>
            </p>
          </div>
          <div className="receivedMsg">
            <div className="msgSender">Kenny</div>
            <p>
              Received Messages! {""}
              <em>Nov, 11 - 11:55am</em>
            </p>
          </div>
          <div className="sentMsg">
            <p>
              Sent Messages! {""} <em>Nov, 11 - 11:55am</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
