import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  getSingleProduct,
  updateSingleProduct,
} from "../controllers/product.controller";

const router = Router();


// CRUD operation routes of Products
router.post("/", createProduct);  // create new product
router.get("/", getProducts); // fetch all the products
router.get("/:productId", getSingleProduct); // fetch a specific product by matching id
router.put("/:productId", updateSingleProduct); // find a product by id and update the data
router.delete("/:productId", deleteProduct); // delete a product

export const ProductRoutes = router;
