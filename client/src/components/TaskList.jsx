import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TaskList.css";
import AddTask from "./AddTask";
import UpdateTask from "./UpdateTask";

const TaskList = ({ showNotification }) => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      showNotification("Error fetching tasks", "error");
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/delete/${id}`);
      fetchTasks(); // Refresh the task list
      showNotification("Task deleted successfully", "error"); // Error color for deletion
    } catch (error) {
      console.error("Error deleting task:", error);
      showNotification("Error deleting task", "error");
    }
  };

  const toggleComplete = async (task) => {
    try {
      await axios.put(`http://localhost:3000/api/update/${task._id}`, {
        taskCompleted: !task.taskCompleted,
      });
      fetchTasks(); // Refresh the task list
      showNotification("Task updated successfully", "info"); // Info color for update
    } catch (error) {
      console.error("Error updating task:", error);
      showNotification("Error updating task", "error");
    }
  };

  return (
    <div>
      <h1>Task List</h1>
      <AddTask fetchTasks={fetchTasks} showNotification={showNotification} />
      {selectedTask && (
        <UpdateTask
          task={selectedTask}
          fetchTasks={fetchTasks}
          setSelectedTask={setSelectedTask}
          showNotification={showNotification}
        />
      )}
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <input
              type="checkbox"
              checked={task.taskCompleted}
              onChange={() => toggleComplete(task)}
            />
            <span
              style={{
                textDecoration: task.taskCompleted ? "line-through" : "none",
              }}
            >
              {task.taskName}
            </span>
            <button onClick={() => setSelectedTask(task)}>Update</button>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
