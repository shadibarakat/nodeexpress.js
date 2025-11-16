import express from "express";
import tasksRouter from "./routes/tasks.js";

const app = express();
const PORT = 5000;

app.use(express.json());

app.use("/api/tasks", tasksRouter);

app.get("/", (req, res) => {
  res.json({ message: "CSC 436 Project 4 API is running" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Server error" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
