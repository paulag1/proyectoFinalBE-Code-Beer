import express from "express";

import {deleteProduct, getProducts, postProduct, putProduct } from "../controllers/productControllers";
import { checkAdmin, isAuthenticated } from "../middlewares/isAuthenticated";

export const routerProducts = express.Router();


routerProducts.post("/product", checkAdmin , postProduct);


routerProducts.get("/products", isAuthenticated , getProducts);


routerProducts.delete("/product/:productId", checkAdmin, deleteProduct)


routerProducts.put('/product/:productId', checkAdmin, putProduct)