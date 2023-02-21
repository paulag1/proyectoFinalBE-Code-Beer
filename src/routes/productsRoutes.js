import express from "express";

import {deleteProduct, getProducts, postProduct, putProduct } from "../controllers/productControllers";
import { checkAdmin, isAuthenticated } from "../middlewares/isAuthenticated";

export const routerProducts = express.Router();

//POST ------------------------------------
routerProducts.post("/product", isAuthenticated , postProduct);

//GET -------------------------------------
routerProducts.get("/products", checkAdmin , getProducts);

//DELETE ----------------------------------
routerProducts.delete("/product/:productId", isAuthenticated, deleteProduct)

//PUT ------------------------------------- 
routerProducts.put('/product/:productId', isAuthenticated, putProduct)