import { type Response } from "express";
interface Payload {
  [key: string]: unknown;
}

export function response(
  res: Response,
  statusCode: number,
  success: boolean,
  message: string,
  payload: Payload = {},
) {
  return res.status(statusCode).json({
    success,
    message,
    ...payload,
  });
}
