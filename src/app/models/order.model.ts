import { Schema, model } from "mongoose";

interface IOrder {
  email: string;
  product: Schema.Types.ObjectId;
  quantity: number;
  totalPrice: number;
}

const orderSchema = new Schema<IOrder>(
  {
    email: { type: String, required: true },
    product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Order = model<IOrder>("Order", orderSchema);
