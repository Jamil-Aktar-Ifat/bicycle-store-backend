import express, { Request, Response } from "express";
import cors from 'cors';

const app = express();

// Middleware parsers
app.use(express.json());
app.use(cors());

// Default route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the Bicycle Store API!" });
});

export default app;
