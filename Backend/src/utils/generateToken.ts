import jwt from "jsonwebtoken";

export function generateToken(userId: string) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRE || "7d",
  } as jwt.SignOptions);
  return token;
}
