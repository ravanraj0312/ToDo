const express = require("express");
const router = express.Router();
const Task = require("../models/todo.js");

// GET all tasks
router.get("/", async (req, res) => {
  try {
    const allTasks = await Task.find();
    res.status(200).json(allTasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Error fetching tasks", error });
  }
});

// GET task by ID
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    console.error("Error fetching task:", error);
    res.status(500).json({ message: "Error fetching task", error });
  }
});

// POST route to add a task
router.post("/add-task", async (req, res) => {
  try {
    const task = new Task({
      taskName: req.body.taskName,
    });

    // Save the task to the database
    await task.save();
    console.log("Successfully added the task");
    res.status(201).json({ message: "Task successfully added", task });
  } catch (error) {
    console.error("Error adding task:", error);
    res.status(500).json({ message: "Error adding task", error });
  }
});

// DELETE all tasks
router.delete("/delete-all", async (req, res) => {
  try {
    await Task.deleteMany();
    console.log("Successfully deleted all tasks");
    res.status(200).json({ message: "All tasks deleted successfully" });
  } catch (error) {
    console.error("Error deleting all tasks:", error);
    res.status(500).json({ message: "Error deleting all tasks", error });
  }
});

// DELETE task by ID
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Error deleting task", error });
  }
});

// PUT route to update a task
router.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;

    const updatedTask = await Task.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task updated successfully", updatedTask });
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Error updating task", error });
  }
});

module.exports = router;
