import type { NextFunction, Response, Request } from "express";
import { validationResult } from "express-validator";
import { response } from "../utils/response.js";

export function validateResult(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    response(res, 400, false, "", { errors: errors.array() });
  }
  next();
}
