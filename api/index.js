const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));

const projects = [
  {
    title: "Intelligent Disaster Management System",
    description: "IoT-based disaster detection using ML and real-time sensor data.",
    techStack: "Python, ML, IoT, AWS/Firebase"
  },
  {
    title: "Task Manager Web Application",
    description: "Task manager with CRUD operations and local storage.",
    techStack: "HTML, CSS, JavaScript"
  }
];

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.use("/public", express.static(path.join(__dirname, "../public")));