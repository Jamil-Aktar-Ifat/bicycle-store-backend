import express, { Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/routes/product.routes";
import { OrderRoutes } from "./app/routes/order.routes";

const app = express();

// Middleware parsers
app.use(express.json());
app.use(cors());

// Application routes
app.use("/api/v1/products", ProductRoutes);
app.use("/api/v1/orders", OrderRoutes);

// Default route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the Bicycle Store API!" });
});

export default app;
