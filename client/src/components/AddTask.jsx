import React, { useState } from "react";
import axios from "axios";
import "./AddTask.css";

const AddTask = ({ fetchTasks, showNotification }) => {
  const [taskName, setTaskName] = useState("");

  const addTask = async () => {
    try {
      await axios.post("http://localhost:3000/api/add-task", { taskName });
      setTaskName(""); // Clear the input
      fetchTasks(); // Refresh the task list
      showNotification("Task added successfully", "success");
    } catch (error) {
      console.error("Error adding task:", error);
      showNotification("Error adding task", "error");
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="task-input"
      />
      <button onClick={addTask} className="task-button">
        Add
      </button>
    </div>
  );
};

export default AddTask;
