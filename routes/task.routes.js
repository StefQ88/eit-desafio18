import { Router } from "express";
import { createTask, getTasks } from "../controllers/taskControllers.js";
import { createTaskRules } from "../middlewares/taskValidations.js";
import { validationErrorResponse } from "../middlewares/validationErrorResponse.js";

const router = Router();

router.post("/", createTaskRules, validationErrorResponse, createTask);

router.get("/", getTasks);

export default router;
