import express, { Request, Response } from "express";
import cors from "cors";
import productRoutes from "./app/routes/product.routes";

const app = express();

// Middleware parsers
app.use(express.json());
app.use(cors());

// Application routes
app.use("/api/v1/products", productRoutes);

// Default route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the Bicycle Store API!" });
});

export default app;
