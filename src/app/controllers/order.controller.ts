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

export const getRevenue = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Use MongoDB aggregation pipeline to calculate total revenue
    const revenue = await Order.aggregate([
      {
        $group: {
          _id: null, // Group all documents together
          totalRevenue: { $sum: "$totalPrice" }, // Sum the totalPrice field
        },
      },
    ]);

    // Return the revenue or 0 if no orders exist
    const totalRevenue = revenue.length > 0 ? revenue[0].totalRevenue : 0;

    res.status(200).json({
      message: "Revenue calculated successfully",
      status: true,
      data: {
        totalRevenue,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to calculate revenue",
      success: false,
      error: error.message,
    });
  }
};
