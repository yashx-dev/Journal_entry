import type { RequestHandler } from "express";
import { validationResult } from "express-validator";
import { validationError } from "../errors/Error.js";

export const validateResult: RequestHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new validationError(errors.array());
  }
  next();
};
