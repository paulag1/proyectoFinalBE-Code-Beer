import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema({
  id: Number,
  name: String,
  price: Number,
  description: String,
  image: String,
  category: String,
  available: Boolean,
});

export default mongoose.model('Products', productSchema);
