
import express from "express";

import { postLogin } from "../controllers/authControllers";

export const routerAuth = express.Router()



routerAuth.post("/login", postLogin);

