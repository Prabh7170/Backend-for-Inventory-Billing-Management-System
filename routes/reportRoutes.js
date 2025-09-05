import express from "express";
import { getInventoryReport, getTransactionsReport } from "../controllers/reportController.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/inventory", auth, getInventoryReport);
router.get("/transactions", auth, getTransactionsReport);

export default router;
