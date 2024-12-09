import { Request, Response } from "express";
import { Product } from "../models/product.model";
import { Order } from "../models/order.model";

export const createOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, product, quantity } = req.body;

    // Validate that the required fields are present
    if (!email || !product || !quantity) {
      res.status(400).json({
        message: "Missing required fields: email, product, or quantity",
        success: false,
      });
      return;
    }

    // Fetch the product from the database
    const productDetails = await Product.findById(product);

    if (!productDetails) {
      res.status(404).json({
        message: "Product not found",
        success: false,
      });
      return;
    }

    // Check if the product has sufficient stock
    if (productDetails.quantity < quantity) {
      res.status(400).json({
        message: "Insufficient stock",
        success: false,
      });
      return;
    }

    // Calculate the total price
    const totalPrice = productDetails.price * quantity;

    // Create the order
    const newOrder = await Order.create({
      email,
      product,
      quantity,
      totalPrice,
    });

    // Update product stock
    productDetails.quantity -= quantity;
    if (productDetails.quantity === 0) {
      productDetails.inStock = false;
    }
    await productDetails.save();

    // Respond with success
    res.status(201).json({
      message: "Order created successfully",
      success: true,
      data: newOrder,
    });
  } catch (error: any) {
    // Handle errors
    res.status(500).json({
      message: "An error occurred while creating the order",
      success: false,
      error: error.message,
    });
  }
};

