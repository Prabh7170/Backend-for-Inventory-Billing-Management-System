import express from "express";
import { getTransactions, createTransaction } from "../controllers/transactionController.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getTransactions);
router.post("/", auth, createTransaction);

export default router;
