const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const { rateLimit } = require("express-rate-limit");
const data = require("./problems.json");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

const specificLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 10,
  message: "<b>Too many requests for this route, please try again later.</b>",
});

app.use(limiter);

app.use(express.static("public"));

app.use(
  cors({
    origin: "*",
  }),
);

let leet = require("./leetcode");
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

app.get("/problems", (req, res) => {
  res.json(data);
});

app.get("/:id", specificLimiter, leet.leetcode);

app.listen(3000, () => {
  console.log("\n\tRunning Backend:");
  console.log("\x1b[36m \tLocal:\thttp://localhost:3000/ \x1b[0m");
});
