import { Request, Response } from "express";
import { sendApiResponse } from "../../utils/responseHandler";
import { getAllProductFromDB, getProductFromDb } from "./product.service";

export const getAllProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const products = await getAllProductFromDB();
  sendApiResponse(res, 200, true, products);
};

export const getProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const product = await getProductFromDb(id);
  sendApiResponse(res, 200, true, product);
};
