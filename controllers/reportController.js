import Product from "../models/Product.js";
import Transaction from "../models/Transaction.js";

// Inventory report
export const getInventoryReport = async (req, res) => {
  try {
    const products = await Product.find({ businessId: req.user._id });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Transactions report
export const getTransactionsReport = async (req, res) => {
  try {
    const { type, startDate, endDate } = req.query;

    const query = { businessId: req.user._id };
    if (type) query.type = type;
    if (startDate || endDate) query.date = {};
    if (startDate) query.date.$gte = new Date(startDate);
    if (endDate) query.date.$lte = new Date(endDate);

    const transactions = await Transaction.find(query);
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
