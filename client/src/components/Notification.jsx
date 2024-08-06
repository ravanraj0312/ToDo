import React from "react";
import "./Notification.css";

const Notification = ({ message, type }) => {
  if (!message) return null; // Do not render if there's no message

  return <div className={`notification ${type}`}>{message}</div>;
};

export default Notification;
