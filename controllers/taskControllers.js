import { Task } from "../models/Task.js";

// GET /api/tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().select("title description");
    return res.json({ ok: true, tasks });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, msg: "Error internal server" });
  }
};

// POST /api/tasks
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = await Task.create({ title, description });

    if (!task) {
      return res.status(400).json({ ok: false, msg: "No se pudo crear la tarea." });
    }
    return res.status(201).json({ ok: true, task });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, msg: "Error internal server" });
  }
};
