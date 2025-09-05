import express from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
} from "../controllers/productController.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getProducts);
router.post("/", auth, createProduct);
router.put("/:id", auth, updateProduct);
router.delete("/:id", auth, deleteProduct);

export default router;
