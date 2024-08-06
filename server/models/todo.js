const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    taskName: {
      type: String,
      required: true,
    },
    taskCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const todos = mongoose.model("todos", todoSchema);
module.exports = todos;
