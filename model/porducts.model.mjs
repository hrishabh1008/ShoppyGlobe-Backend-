import mongoose from "mongoose";

const porductSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    title: {
      type: String,
      require: true,
    },
    images: {
      type: Array,
    },
    category: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    stock: {
      type: Number,
      require: true,
    },
    brand: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const porductsModel = mongoose.model("products", porductSchema);

export default porductsModel;
