import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UpdateTask.css";

const UpdateTask = ({
  task,
  fetchTasks,
  setSelectedTask,
  showNotification,
}) => {
  const [taskName, setTaskName] = useState(task.taskName);

  useEffect(() => {
    setTaskName(task.taskName); // Update state if task prop changes
  }, [task]);

  const updateTask = async () => {
    try {
      await axios.put(`http://localhost:3000/api/update/${task._id}`, {
        taskName,
      });
      fetchTasks(); // Refresh the task list
      setSelectedTask(null); // Clear the selected task
      showNotification("Task updated successfully", "success");
    } catch (error) {
      console.error("Error updating task:", error);
      showNotification("Error updating task", "error");
    }
  };

  return (
    <div>
      <h2>Update Task</h2>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="task-input"
      />
      <button onClick={updateTask} className="task-button">
        Update
      </button>
      <button onClick={() => setSelectedTask(null)} className="task-button">
        Cancel
      </button>
    </div>
  );
};

export default UpdateTask;
