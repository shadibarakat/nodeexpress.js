import express from "express";
import tasks from "../data/tasksData.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(tasks);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
});

router.post("/", (req, res) => {
  const { title, completed } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });

  const newTask = {
    id: tasks.length + 1,
    title,
    completed: completed ?? false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (!task) return res.status(404).json({ error: "Task not found" });

  const { title, completed } = req.body;

  task.title = title ?? task.title;
  task.completed = completed ?? task.completed;

  res.json(task);
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).json({ error: "Task not found" });

  const removed = tasks.splice(index, 1);
  res.json({ message: "Deleted", deleted: removed[0] });
});

export default router;
