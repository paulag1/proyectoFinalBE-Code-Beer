import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  productID: { type: Number, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: String,
  category: String,
  isActive: Boolean,
  quantity: Number,
});

export default mongoose.model("Products", productSchema);
