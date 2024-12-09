import { Router } from "express";
import { createOrder, getRevenue } from "../controllers/order.controller";

const router = Router();

router.post("/", createOrder);
router.get("/revenue", getRevenue);

export const OrderRoutes = router;
