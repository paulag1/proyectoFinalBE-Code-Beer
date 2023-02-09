import express from "express";

import {getProducts, postProduct } from "../controllers/productControllers";
import { isAuthenticated } from "../middlewares/isAuthenticated";

export const routerProducts = express.Router();

//POST -----------------------------------------
routerProducts.post("/product", isAuthenticated , postProduct);

//GET -------------------------------------
routerProducts.get("/products", isAuthenticated, getProducts);


