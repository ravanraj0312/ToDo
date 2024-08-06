const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./routes/todoRoutes.js");

var corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://admin:admin@todocluster.esichuh.mongodb.net/todo_DB?retryWrites=true&w=majority&appName=ToDoCluster"
  )
  .then(() => {
    console.log("Connnected Database Succesfully");
  })
  .catch((err) => {
    console.error("Got an error" + err);
  });

app.use("/api", routes);

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
