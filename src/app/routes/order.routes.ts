import { Router } from "express";
import { createOrder, getRevenue } from "../controllers/order.controller";

const router = Router();

// create order and get revenue routes
router.post("/", createOrder);
router.get("/revenue", getRevenue);

export const OrderRoutes = router;
