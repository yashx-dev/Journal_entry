import express, { type Express, type Request, type Response } from "express";
import { response } from "./utils/response.js";
const app: Express = express();
app.use(express.json());
const Port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
response(res, 200, true, "Server is running",)
});

function validateEnvVariables() {
  const envVariable = ["DATABASE_URL", "JWT_SECRET", "PORT"];

  for (const env of envVariable) {
    if (!process.env[env]) {
      throw new Error(`Missing environment variable: ${env}`);
    }
  }
}

function startServer() {
  try {
    validateEnvVariables();
    app.listen(Port, () => {
      console.log(`Server is running on http://localhost:${Port}/`);
    });
  } catch (error) {
    console.error("Failed to connect to Database");
    console.error(error);
    process.exit(1);
  }
}

startServer();
