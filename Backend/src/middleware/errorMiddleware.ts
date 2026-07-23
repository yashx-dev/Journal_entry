import type { RequestHandler, ErrorRequestHandler } from "express";
import { ValidationError } from "../errors/Error.js";
import { response } from "../utils/response.js";

export const pageNotFound: RequestHandler = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode: number = res.statusCode === 200 ? 500 : res.statusCode;
  let message: string = err.message || "Server error";

  if (err instanceof ValidationError) {
    return response(res, err.statusCode, false, err.message, {
      error: err.errors,
    });
  }

  return response(res, statusCode, false, message, {
    ...(process.env.NODE_ENV === "development" && { error: err.message }),
  });
};
