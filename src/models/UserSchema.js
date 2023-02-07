import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  id: Number,
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isActive: Boolean,
});

export default mongoose.model("Users", userSchema);
