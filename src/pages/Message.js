import React from "react";

const Message = ({ message: { user, text }, name, timestamps }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name;

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <div>
      <p>{trimmedName}</p>
      <div>
        <p>{text}</p>
        <em>{timestamps}</em>
      </div>
    </div>
  ) : (
    <div>
      <div>
        <p>{text}</p>
        <em>{timestamps}</em>
      </div>
      <p>{user}</p>
    </div>
  );
};
export default Message;
