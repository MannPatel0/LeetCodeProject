const express = require("express");
const app = express();

const cors = require("cors");
const path = require("path");
const data = require("./problems.json");

app.use(express.static("public"));

app.use(
  cors({
    origin: "*",
  }),
);

let leet = require("./leetcode");

app.get("/:id", leet.leetcode);

app.listen(3000, () => {
  console.log("\n\tRunning Backend:");
  console.log("\x1b[36m \tLocal:\thttp://localhost:3000/ \x1b[0m");
});

app.get("/", (req, res) => {
  res.status(200).json(data);
});
