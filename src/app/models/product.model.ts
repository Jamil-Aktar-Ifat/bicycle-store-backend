import { Schema, model, Document } from "mongoose";

export enum BicycleType {
  Mountain = "Mountain",
  Road = "Road",
  Hybrid = "Hybrid",
  BMX = "BMX",
  Electric = "Electric",
}

interface IProduct extends Document {
  name: string;
  brand: string;
  price: number;
  type: BicycleType;
  description: string;
  quantity: number;
  inStock: boolean;
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    type: { type: String, enum: Object.values(BicycleType), required: true },
    description: { type: String },
    quantity: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export const Product = model<IProduct>("Product", productSchema);
