import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  stock: Number,
  category: String,
  businessId: String
});

export default mongoose.models.Product || mongoose.model("Product", productSchema);
