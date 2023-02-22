import express from "express";

import {deleteProduct, getProducts, postProduct, putProduct } from "../controllers/productControllers";
import { checkAdmin, isAuthenticated } from "../middlewares/isAuthenticated";

export const routerProducts = express.Router();

//POST ------------------------------------
routerProducts.post("/product", checkAdmin , postProduct);

//GET -------------------------------------
routerProducts.get("/products", isAuthenticated , getProducts);

//DELETE ----------------------------------
routerProducts.delete("/product/:productId", checkAdmin, deleteProduct)

//PUT ------------------------------------- 
routerProducts.put('/product/:productId', checkAdmin, putProduct)