import { Request, Response } from "express";
import { Product } from "../models/product.model";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({
      message: "Bicycle Product created successfully",
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create bicycle",
      success: false,
      error,
    });
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find(req.body);
    res.status(200).json({
      message: "Bicycles retrieved successfully",
      success: true,
      data: products,
    });
    // console.log(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve bicycles",
      success: false,
      error,
    });
  }
};

export const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    if (!product) {
      res.status(404).json({
        message: "Product not found",
        success: false,
        data: null,
      });
    }
    res.status(200).json({
      message: "Bicycle data retrived successfully!",
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve the bicycle",
      success: false,
      error,
    });
  }
};

export const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.productId,
      req.body,
      { new: true }
    );
    res.status(200).json({
      message: "Product updated successfully!",
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve the bicycle",
      success: false,
      error,
    });
  }
};
