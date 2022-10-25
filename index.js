const express = require("express");
const app = express();
const cors = require("cors");
const courses = require("./data/courses.json");
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("test server is running...");
});
app.get("/courses", (req, res) => {
  res.send(courses);
});
app.get("/courses/:id", (req, res) => {
  const course = courses.find((course) => req.params.id == course.id);
  res.send(course);
});

app.listen(port, () => {
  console.log("test server listening on :", port);
});
