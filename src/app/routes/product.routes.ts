import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  getSingleProduct,
  updateSingleProduct,
} from "../controllers/product.controller";

const router = Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/:productId", getSingleProduct);
router.put("/:productId", updateSingleProduct);
router.delete("/:productId", deleteProduct);

export const ProductRoutes = router;
