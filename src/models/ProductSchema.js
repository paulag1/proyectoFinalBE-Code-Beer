import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  productID: { type: Number, required: true },
  name: String,
  price: Number,
  description: String,
  image: String,
  category: String,
  isActive: Boolean,
});

export default mongoose.model("Products", productSchema);
