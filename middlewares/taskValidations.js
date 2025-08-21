import { body } from "express-validator";

// Reglas para POST /api/tasks
export const createTaskRules = [
  body("title")
    .exists({ checkFalsy: true })
    .withMessage("El título es obligatorio.")
    .isString()
    .withMessage("El título debe ser texto.")
    .trim()
    .isLength({ max: 120 })
    .withMessage("El título no puede superar 120 caracteres."),

  body("description")
    .optional()
    .isString()
    .withMessage("La descripción debe ser texto.")
    .trim()
    .isLength({ max: 500 })
    .withMessage("La descripción no puede superar 500 caracteres."),
];
