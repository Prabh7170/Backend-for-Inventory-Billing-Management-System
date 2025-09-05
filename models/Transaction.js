import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  type: { type: String, enum: ["sale", "purchase"], required: true },
  customerId: String,
  vendorId: String,
  products: [
    {
      productId: String,
      quantity: Number,
      price: Number
    }
  ],
  totalAmount: Number,
  date: { type: Date, default: Date.now },
  businessId: String
});

export default mongoose.models.Transaction || mongoose.model("Transaction", transactionSchema);
