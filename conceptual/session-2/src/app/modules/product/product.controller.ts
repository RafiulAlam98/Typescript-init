import { Request, Response } from "express";
import { getAllProductFromDB, getProductFromDb } from "./product.service";

export const getAllProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const products = await getAllProductFromDB();
  res.send(products);
};

export const getProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const products = await getProductFromDb(id);
  res.send(products);
};
