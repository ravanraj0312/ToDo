import React, { useState } from "react";
import TaskList from "./components/TaskList";
import Notification from "./components/Notification";
import "./App.css";

const App = () => {
  const [notification, setNotification] = useState({
    message: "",
    type: "",
    visible: false,
  });

  const showNotification = (message, type) => {
    setNotification({ message, type, visible: true });
    setTimeout(
      () => setNotification({ message: "", type: "", visible: false }),
      3000
    );
  };

  return (
    <div className="container">
      <Notification message={notification.message} type={notification.type} />
      <TaskList showNotification={showNotification} />
    </div>
  );
};

export default App;
