import { NextFunction, Request, Response } from "express";
import { prismaClient } from "../utils/prisma.utils";

export const addProduct = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productName, quantity, price, userId } = req.body;

    // const selectedUser = await prismaClient.user.findUnique({
    //   where: { id: req.user.id },
    // });
    // console.log(req.user.id);
    // if (!selectedUser) throw new Error("User not found");

    const newProduct = await prismaClient.product.create({
      data: {
        productName,
        quantity,
        price,
        userId,
      },
    });

    const {
      id,
      productName: prodName,
      price: prodPrice,
      quantity: prodQuantity,
      userId: userID,
    } = newProduct;

    if (!newProduct) throw new Error("Error while creation");

    return res.status(200).json({
      success: true,
      data: {
        id,
        productName: prodName,
        price: prodPrice,
        quantity: prodQuantity,
        userId: userID,
      },
    });
  } catch (e) {
    next(e);
  }
};

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await prismaClient.product.findMany();
    res.json(products);
  } catch (e) {
    next(e);
  }
};
