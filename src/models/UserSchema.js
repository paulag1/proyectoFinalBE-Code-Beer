import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  id: Number,
  name: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  isActive: Boolean,
});

export default mongoose.model("Users", userSchema);
