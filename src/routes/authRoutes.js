// autenticar login, logout
import express from "express";

import { postLogin } from "../controllers/authControllers";

export const routerAuth = express.Router()


// POST -----------------------------
routerAuth.post("/login", postLogin);

