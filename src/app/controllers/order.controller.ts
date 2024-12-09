import { Request, Response } from "express";
import { Product } from "../models/product.model";
import { Order } from "../models/order.model";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { email, product: productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product || product.quantity < quantity) {
      return res.status(400).json({
        message: "Insufficient stock",
        success: false,
        data: null,
      });
    }

    const totalPrice = product.price * quantity;
    product.quantity -= quantity;
    if (product.quantity === 0) product.inStock = false;
    await product.save();

    const order = await Order.create({
      email,
      product: productId,
      quantity,
      totalPrice,
    });
    res.status(200).json({
      message: "Order created successfully",
      success: true,
      data: order,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create order",
      success: false,
      error,
    });
  }
};
