import mongoose from "mongoose";

// Order Item Schema
import mongoose from "mongoose";
const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});
export default orderItemSchema;

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItems: {
      type: [orderItemSchema],    // array ke andar [{}] multiple objects ki form me bhi de skte the.
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      // jab pata ho confirm ki ye hi condtion ya field ho skti hai
      enum: ["PENDING", "CANCELLED", "DELIVERED"], // it forces us to choose between these
      default: "PENDING",
    },
  },
  { timestamps: true },
);

export const Order = mongoose.model("Order", orderSchema);