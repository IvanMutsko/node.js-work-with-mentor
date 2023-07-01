const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const fishRouter = require("./routes/api/fish");
const frogRouter = require("./routes/api/frogs");
const mongoose = require("mongoose");

const app = express();

const { PORT, DB_HOST } = process.env;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(req.query);
});

app.get("/:name/:age/:city", (req, res) => {
  res.send(rq.params);
});

app.use("/api/fishes", fishRouter);

app.use("/api/frogs", frogRouter);

app.use((req, res) => {
  res.status(404).send("Not found");
});

app.use((error, req, res, next) => {
  const { status = 500, message = "Server error" } = error;
  res.status(status).send(message);
});

app.listen(PORT, () => {
  mongoose.connect(DB_HOST);
  console.log(`Server is running on port ${PORT}`);
});
