import "dotenv/config";
import express from "express";

import { dbConection } from "./database/dbConection.js";
import tasksRoutes from "./routes/task.routes.js";

const server = express();

const api = async () => {
  try {
    await dbConection();
  } catch {
    console.warn("No se pudo conectar a Mongo.");
  }

  server.use(express.json());

  server.get("/api/health", (req, res) => res.json({ ok: true }));

  //ruta de tareas
  server.use("/api/tasks", tasksRoutes);

  const PORT = process.env.PORT || 4000;
  server.listen(PORT, () => {
    console.log(`Server en http://localhost:${PORT}`);
  });
};

api();
