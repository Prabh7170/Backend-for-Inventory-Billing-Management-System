import Transaction from "../models/Transaction.js";
import Product from "../models/Product.js";

// Get all transactions
export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ businessId: req.user._id });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create transaction (sale/purchase)
export const createTransaction = async (req, res) => {
  try {
    const { type, customerId, vendorId, products } = req.body;

    // Calculate total amount
    const totalAmount = products.reduce((acc, p) => acc + p.price * p.quantity, 0);

    // Create transaction
    const transaction = await Transaction.create({
      type, customerId, vendorId, products, totalAmount, businessId: req.user._id
    });

    // Update product stock
    for (const p of products) {
      const product = await Product.findById(p.productId);
      if (product) {
        product.stock += (type === "purchase" ? p.quantity : -p.quantity);
        await product.save();
      }
    }

    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
